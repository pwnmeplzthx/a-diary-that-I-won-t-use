import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import { UserContextProvider } from './context/userContext';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import Main from './layout/main/main';
import Sidebar from './layout/sidebar/sidebar';

function App() {
    const [data, saveData] = useLocalStorage('data');
    const [selectedItem, setSelectedItem] = useState(null);

    const onSubmit = (dataItem) => {
        if (!dataItem.id) {
            saveData([...data, {
                ...dataItem,
                id: data.length > 0 ? Math.max(...data.map((i) => i.id)) + 1 : 1,
            }]);
        } else {
            saveData(data.map((item) => {
                if (item.id === dataItem.id) {
                    return {
                        ...dataItem,
                    };
                }
                return item;
            }));
        }
    };

    const deleteItem = (id) => {
        const newData = data.filter((item) => item.id !== id);
        if (newData.length !== 0) {
            saveData(newData);
        } else {
            saveData([]);
        }
    };

    return (
        <UserContextProvider>
            <div className="app">
                <Sidebar>
                    <Header />
                    <JournalAddButton clearForm={() => setSelectedItem(null)} />
                    <JournalList items={data} setItem={setSelectedItem} />
                </Sidebar>
                <Main>
                    <JournalForm onSubmit={onSubmit} data={selectedItem} onDelete={deleteItem} />
                </Main>
            </div>
        </UserContextProvider>
    );
}

export default App;
