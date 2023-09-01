import { useParams } from 'react-router-dom';
import s from './SingleWorkPage.module.css'
import { work_data } from '../../data'
import SingleWorkContent from '../../components/SingleWorkContent/SingleWorkContent';

const SingleWorkPage = () => {
    const { id } = useParams()
    const {
        full_title,
        main_img,
        year,
        tags,
        text,
        content
    } = work_data.find((el) => el.id === +id)

    return (
        <div className={s.page}>
            <div className={s.container}>
                <h1 className={s.main_title}>{full_title}</h1>
                <div className={s.addit_info}>
                    <span className={s.year}>{year}</span>
                    <div className={s.tags}>
                        {
                            tags.map((el, i) =>
                                <span key={el}>
                                    {i === tags.length - 1 ? el : el + ', '}
                                </span>
                            )
                        }
                    </div>
                </div>
                <p className={s.text}>{text}</p>
                <img className={s.main_img} src={main_img} alt={'main_pic'} />
                <SingleWorkContent content={content} />
            </div>
        </div>
    );
};

export default SingleWorkPage;