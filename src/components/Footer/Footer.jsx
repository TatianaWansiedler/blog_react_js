import s from './Footer.module.css'
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.soc_media}>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={fb} alt="facebook_icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={insta} alt="instagram_icon" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="twitter_icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin_icon" />
                </a>
            </div>
            <p className={s.copyright}>Copyright ©2020 All rights reserved </p>
        </footer>
    );
};

export default Footer;