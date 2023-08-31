import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

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
            </div>
        </header>
    );
};

export default Header;