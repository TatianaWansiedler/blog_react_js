import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import burger from '../../assets/menu.svg'

const Header = () => {
    const links = ['Home', 'Works', 'Blog', 'Contacts']
    const changeClass = ({ isActive }) => isActive ? [s.nav_link, s.active].join(' ') : s.nav_link

    return (
        <header className={s.header}>
            <div className={s.container}>
                <nav className={s.nav}>
                    {
                        links.map((el, i) =>
                            <NavLink
                                to={i === 0 ? '/' : `/${el.toLowerCase()}`}
                                className={changeClass}
                                key={el}
                            >
                                {el}
                            </NavLink>)
                    }
                </nav>
                <img className={s.menu} src={burger} alt="menu_icon" />
            </div>
        </header>
    );
};

export default Header;