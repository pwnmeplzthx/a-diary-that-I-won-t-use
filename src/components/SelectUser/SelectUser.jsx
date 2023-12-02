import { useContext } from 'react';
import cls from './SelectUser.module.css';
import { UserContext } from '../../context/userContext';

function SelectUser() {
    const { userId, changeUser } = useContext(UserContext);

    const onChangeHandler = (e) => {
        changeUser(Number(e.target.value));
    };

    return (
        <select name="user" id="user" value={userId} onChange={onChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
    );
}

export default SelectUser;
