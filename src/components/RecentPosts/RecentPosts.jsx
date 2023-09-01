import { useNavigate } from 'react-router-dom';
import s from './RecentPosts.module.css';
import Post from '../Post/Post';
import { blog_data } from '../../data'

const RecentPosts = () => {
    const navigation = useNavigate()
    
    return (
        <section className={s.container}>
            <div className={s.heading}>
                <h2>Recent posts</h2>
                <button
                    className={s.link_to_blog}
                    onClick={() => navigation('/blog')}
                >
                    View all
                </button>
            </div>
            <div className={s.posts_wrapper}>
                {
                    blog_data.map((el, i) =>
                        <div key={el.id} className={s.post_container}>
                            <Post {...el} styles={'light'}/>
                        </div>
                    ).slice(0,2)
                }
            </div>
        </section>
    );
};

export default RecentPosts;