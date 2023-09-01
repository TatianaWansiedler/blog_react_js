import s from './SingleWorkContent.module.css'

const SingleWorkContent = ({ content }) => {

    return (
        <div>
            {
                content.map(el => {
                    return el[0] === 'h1' ? <h1 className={s.title}>{el[1]}</h1>
                        : el[0] === 'img' ? <img className={s.img } src={el[1]} alt='img' />
                            : el[0] === 'text' ? <p className={s.text}>{el[1]}</p>
                                : el[0] === 'h2' ? <h2 className={s.subtitle}>{el[1]}</h2>
                                    : ''
                })
            }
        </div>
    );
};

export default SingleWorkContent;