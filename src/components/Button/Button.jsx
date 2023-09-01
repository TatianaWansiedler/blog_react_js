import s from './Button.module.css'

const Button = ({ text, style, callback }) => {
    return (
        <button className={s.btn} onClick={callback} style={style}>
            {text}
        </button>
    );
};

export default Button;