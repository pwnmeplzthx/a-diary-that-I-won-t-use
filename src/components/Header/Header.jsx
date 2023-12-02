import SelectUser from '../SelectUser/SelectUser';
import cls from './Header.module.css';

function Header() {
    return (
        <>
            <img className={cls.logo} src="/logo.svg" alt="Logo" />
            <SelectUser />
        </>
    );
}

export default Header;
