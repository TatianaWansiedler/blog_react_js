import s from './Header.module.css';
import burger from '../../assets/menu.svg'
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import MobMenu from '../MobMenu/MobMenu';

const Header = () => {
    const [menuActive, setMenuActiveMenu] = useState(false)
    const menuHandler = () => {
        setMenuActiveMenu(!menuActive)
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Navigation />
                <img onClick={menuHandler} className={s.burger} src={burger} alt="burger_icon" />
                <MobMenu active={menuActive} setActive={setMenuActiveMenu} />
            </div>
        </header>
    );
};

export default Header;