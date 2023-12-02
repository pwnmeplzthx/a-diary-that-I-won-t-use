import {
    useContext,
    useEffect, useReducer, useRef,
} from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import cls from './JournalForm.module.css';
import { formReducer, initialState } from './JournalForm.state';
import { UserContext } from '../../context/userContext';

function JournalForm(props) {
    const { onSubmit, data, onDelete } = props;
    const [formState, dispatchForm] = useReducer(formReducer, initialState);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();
    const { userId } = useContext(UserContext);

    const focusError = (isValid) => {
        switch (true) {
        case !isValid.title: {
            titleRef.current.focus();
            break;
        }
        case !isValid.date: {
            dateRef.current.focus();
            break;
        }
        case !isValid.post: {
            postRef.current.focus();
            break;
        }
        }
    };

    useEffect(() => {
        if (!data) {
            dispatchForm({ type: 'CLEAR' });
            dispatchForm({ type: 'SET_VALUE', payload: { userId } });
        } else {
            dispatchForm({ type: 'SET_VALUE', payload: { ...data } });
        }
    }, [data, userId]);

    useEffect(() => {
        let timerId;
        if (!formState.isValid.date || !formState.isValid.post || !formState.isValid.title) {
            focusError(isValid);
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 2000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [formState.isValid.date, formState.isValid.post, formState.isValid.title, isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            dispatchForm({ type: 'CLEAR' });
            dispatchForm({ type: 'SET_VALUE', payload: { userId } });
        }
    }, [isFormReadyToSubmit, onSubmit, userId, values]);

    useEffect(() => {
        dispatchForm({ type: 'SET_VALUE', payload: { userId } });
    }, [userId]);

    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({ type: 'SUBMIT' });
    };

    const onChangehandler = (e) => {
        dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
    };

    const deleteItemHandler = (id) => {
        onDelete(id);
        dispatchForm({ type: 'CLEAR' });
        dispatchForm({ type: 'SET_VALUE', payload: { userId } });
    };

    return (
        <form className={cls.journalForm} onSubmit={addJournalItem}>
            <div className={cls.titleWrapper}>
                <Input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={onChangehandler}
                    ref={titleRef}
                    apperence="title"
                    isValid={formState.isValid.title}
                />
                {data?.id && (
                    <button onClick={() => deleteItemHandler(data.id)} type="button" className={cls.delete}>
                        <img src="/archive.svg" alt="delete_logo" />
                    </button>
                )}
            </div>
            <div className={cls.formRow}>
                <label htmlFor="date" className={cls.formLabel}>
                    <img src="/calendar.svg" alt="calendar_icon" />
                    <span>Дата</span>
                </label>
                <Input value={values.date} onChange={onChangehandler} isValid={formState.isValid.date} ref={dateRef} type="date" name="date" id="date" />
            </div>
            <div className={cls.formRow}>
                <label htmlFor="tag" className={cls.formLabel}>
                    <img src="/folder.svg" alt="tag_icon" />
                    <span>Метки</span>
                </label>
                <Input value={values.tag} onChange={onChangehandler} type="text" name="tag" id="tag" />
            </div>
            <textarea value={values.post} onChange={onChangehandler} ref={postRef} rows="5" cols="30" name="post" className={`${cls.input} ${isValid.post ? '' : cls.invalid}`} />
            <Button type="submit">Сохранить</Button>
        </form>
    );
}

export default JournalForm;
