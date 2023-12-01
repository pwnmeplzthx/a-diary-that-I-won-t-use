import { useState } from 'react';
import cn from 'classnames';
import Button from '../Button/Button';
import cls from './JournalForm.module.css';

function JournalForm(props) {
    const { onSubmit } = props;

    const [formValidState, setFormValidState] = useState({
        title: true,
        text: true,
        date: true,
    });
    let isFormValid = true;

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        if (!formProps.title?.trim().length) {
            setFormValidState((state) => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setFormValidState((state) => ({ ...state, title: true }));
            isFormValid = true;
        }
        if (!formProps.text?.trim().length) {
            setFormValidState((state) => ({ ...state, text: false }));
            isFormValid = false;
        } else {
            setFormValidState((state) => ({ ...state, text: true }));
            isFormValid = true;
        }
        if (!formProps.date) {
            setFormValidState((state) => ({ ...state, date: false }));
            isFormValid = false;
        } else {
            setFormValidState((state) => ({ ...state, date: true }));
            isFormValid = true;
        }
        if (!isFormValid) return;

        onSubmit(formProps);
    };

    return (
        <form className={cls.journalForm} onSubmit={addJournalItem}>
            <div>
                <input
                    type="text"
                    name="title"
                    className={cn(cls.inputTitle, {
                        [cls.invalid]: !formValidState.title,
                    })}
                />
            </div>
            <div className={cls.formRow}>
                <label htmlFor="date" className={cls.formLabel}>
                    <img src="/calendar.svg" alt="calendar_icon" />
                    <span>Дата</span>
                </label>
                <input type="date" name="date" id="date" className={`${cls.input} ${formValidState.date ? '' : cls.invalid}`} />
            </div>
            <div className={cls.formRow}>
                <label htmlFor="tag" className={cls.formLabel}>
                    <img src="/folder.svg" alt="tag_icon" />
                    <span>Метки</span>
                </label>
                <input type="text" name="tag" id="tag" className={`${cls.input} ${formValidState.text ? '' : cls.invalid}`} />
            </div>
            <textarea rows="5" cols="30" name="post" className={`${cls.input} ${formValidState.text ? '' : cls.invalid}`} />
            <Button type="submit">Сохранить</Button>
        </form>
    );
}

export default JournalForm;
