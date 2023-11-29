import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

function JournalList(props) {
    const { items, setItem } = props;

    return (
        <>
            {items
                .map((el) => (
                    <CardButton key={el.title} onClick={() => setItem(el)}>
                        <JournalItem
                            title={el.title}
                            post={el.post}
                            date={el.date}
                        />
                    </CardButton>
                ))}
        </>
    );
}

export default JournalList;
