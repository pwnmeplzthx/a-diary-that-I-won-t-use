import { useContext, useMemo } from 'react';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';
import { UserContext } from '../../context/userContext';

function JournalList(props) {
    const { items, setItem } = props;
    const { userId } = useContext(UserContext);

    const sortItems = (a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    };

    const filteredItems = useMemo(() => items
        .filter((el) => el.userId === userId)
        .sort(sortItems), [items, userId]);

    if (filteredItems.length === 0) {
        return <p className="journal-list">Записей нет, добавьте первую</p>;
    }

    return (
        <div className="journal-list">
            {filteredItems
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
