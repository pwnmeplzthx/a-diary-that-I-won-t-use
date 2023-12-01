import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

function JournalList(props) {
    const { items, setItem } = props;

    if (items.length === 0) {
        return <p className="journal-list">Записей нет, добавьте первую</p>;
    }

    return (
        <div className="journal-list">
            {items
                .map((el) => (
                    <CardButton key={el.id} onClick={() => setItem(el)}>
                        <JournalItem
                            title={el.title}
                            post={el.post}
                            date={el.date}
                        />
                    </CardButton>
                ))}
        </div>
    );
}

export default JournalList;
