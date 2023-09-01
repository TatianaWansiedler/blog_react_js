import { Link } from 'react-router-dom';
import s from './Work.module.css'


const Work = ({ id, main_img, title, tags, year, text }) => {

    return (
        <Link to={`/work/${id}`} className={s.item}>
            <img className={s.picture} src={main_img} alt={title} />
            <div className={s.info}>
                <h3 className={s.title}>{title}</h3>
                <div className={s.addit_info}>
                    <span className={s.year}>{year}</span>
                    <span className={s.tag}>{tags[0]}</span>
                </div>
                <p className={s.text}>{text}</p>
            </div>
        </Link>
    );
};

export default Work;