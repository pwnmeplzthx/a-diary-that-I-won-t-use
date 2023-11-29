import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Main from './layout/main/main';
import Sidebar from './layout/sidebar/sidebar';

function App() {
    const data = [
        {
            title: 'Первая запись',
            text: 'Первый текст',
            date: new Date(),
        },
        {
            title: 'Вторая запись',
            text: 'Второй текст',
            date: new Date(),
        },
    ];
    return (
        <div className="app">
            <Sidebar>
                <Header />
                <JournalAddButton />
                <JournalList items={data} />
            </Sidebar>
            <Main>
                <JournalForm />
            </Main>
        </div>
    );
}

export default App;
