import s from './NotFoundPage.module.css'
import errorPage from '../../assets/404.png'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const NotFoudPage = () => {
    const navigate = useNavigate()
    const moveBack = () => navigate(-1)
    return (
        <div className={s.page}>
            <div className={s.container}>
                <img className={s.img} src={errorPage} alt="error_page_image" />
                <p className={s.text}>Page Not Found!</p>
                <Button text={'GO BACK'} callback={moveBack} />
            </div>
        </div>
    );
};

export default NotFoudPage;