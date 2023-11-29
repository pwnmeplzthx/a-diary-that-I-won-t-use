import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
    const addJournalItem = (e) => {
        console.log(e.target);
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        e.preventDefault();
        console.log(formProps);
    };

    return (
        <form className="journal-form" onSubmit={addJournalItem}>
            <input type="text" name="title" />
            <input type="date" name="date" />
            <input type="text" name="tag" />
            <textarea rows="5" cols="30" name="post" />
            <Button type="submit">Сохранить</Button>
        </form>
    );
}

export default JournalForm;
