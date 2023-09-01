import s from './UserInfo.module.css'
import user_photo from '../../assets/photo.svg'
import Button from '../Button/Button';

const UserInfo = () => {
    return (
        <section className={s.container}>
            <div className={s.user_info}>
                <h1 className={s.titile}>Hi, I am John, <br /> Creative Technologist</h1>
                <p className={s.descr}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <Button text={'Download Resume'}/>
            </div>
            <figure className={s.photo}>
                <img src={user_photo} alt="user_photo" />
            </figure>

        </section>
    );
};

export default UserInfo;