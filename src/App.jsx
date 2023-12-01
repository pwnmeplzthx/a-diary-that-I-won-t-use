import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import Main from './layout/main/main';
import Sidebar from './layout/sidebar/sidebar';

function App() {
    const [data, saveData] = useLocalStorage('data');
    const onSubmit = (dataItem) => {
        saveData([...data, {
            ...dataItem,
            id: data.length > 0 ? Math.max(...data.map((i) => i.id)) + 1 : 1,
        }]);
    };

    return (
        <div className="app">
            <Sidebar>
                <Header />
                <JournalAddButton />
                <JournalList items={data} />
            </Sidebar>
            <Main>
                <JournalForm onSubmit={onSubmit} />
            </Main>
        </div>
    );
}

export default App;
