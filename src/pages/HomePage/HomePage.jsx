import FeaturedWorks from '../../components/FeaturedWorks/FeaturedWorks';
import RecentPosts from '../../components/RecentPosts/RecentPosts';
import UserInfo from '../../components/UserInfo/UserInfo';
import s from './HomePage.module.css'


const HomePage = () => {
    return (
        <div className={s.page }>
            <UserInfo />
            <div className={ s.recent_posts}>
                <RecentPosts/>
            </div>
            <FeaturedWorks/>
        </div>
    );
};

export default HomePage;