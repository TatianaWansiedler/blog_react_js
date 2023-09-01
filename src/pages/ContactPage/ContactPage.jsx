import s from './ContactPage.module.css'
import Button from '../../components/Button/Button';
import img from '../../assets/contacts_img.png'

const ContactPage = () => {
    return (
        <div className={s.page}>
            <div className={s.container}>
                <div className={s.form_block}>
                    <h1 className={s.title}>Get in Touch</h1>
                    <form className={s.form}>
                        <input
                            className={s.input_text}
                            type="text"
                            name='name'
                            placeholder='Name'
                        />
                        <input
                            className={s.input_text}
                            type="email"
                            name='email'
                            placeholder='Email'
                        />
                        <textarea
                            className={s.message}
                            name="message"
                            placeholder='Message'
                            rows={5}
                        >
                        </textarea>
                        <Button text={'SEND'} style={{ width: "50%", alignSelf: "center" }} />
                    </form>
                </div>
                <img className={s.img} src={img} alt="" />
            </div>
        </div>
    );
};

export default ContactPage;