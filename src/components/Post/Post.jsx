import s from './Post.module.css'

const Post = (props) => {
    const { title, text, tags, date } = props
    return (
        <div className={s.post}>
            <h3 className={s.title}>{title}</h3>
            <div>
                <span>{date}</span>
                <span>{tags}</span>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Post;