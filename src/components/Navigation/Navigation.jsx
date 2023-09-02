import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation = ({ active }) => {
    const links = ['Home', 'Works', 'Blog', 'Contacts']
    const changeClass = ({ isActive }) => isActive ? [s.nav_link, s.active].join(' ') : s.nav_link

    return (
        <nav className={active ? s.nav_mob : s.nav } >
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
    );
};

export default Navigation;