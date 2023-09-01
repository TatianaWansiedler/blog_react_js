import s from './Post.module.css'

const Post = ({ title, text, tags, date, styles }) => {

    return (
        <div className={s[`post-${styles}`]}>
            <h3 className={s[`title-${styles}`]}>{title}</h3>
            <div className={s.addit_info}>
                <span className={s[`date-${styles}`]}>{date}</span>
                <span className={s.decor }></span>
                <span className={s[`tags-${styles}`]}>{tags}</span>
            </div>
            <p className={s.text}>{text}</p>
        </div>
    );
};

export default Post;