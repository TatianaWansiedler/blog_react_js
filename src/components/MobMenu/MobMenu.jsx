import s from './MobMenu.module.css'
import Navigation from '../Navigation/Navigation';

const MobMenu = ({ active, setActive }) => {

    return (
        <div className={active ? `${s.menu} ${s.active}` : s.menu} onClick={() => setActive(false)} >
            <div className={s.blur}>
            </div>
            <Navigation active={ active} />
        </div>
    );
};

export default MobMenu;