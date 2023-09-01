import Title from '../../components/Title/Title';
import Work from '../../components/Work/Work';
import { work_data } from '../../data';
import s from './WorksPage.module.css'

const WorksPage = () => {

    return (
        <div className={s.page}>
            <div className={s.container}>
                <Title text={'Works'} />
                <div className={s.works_wrapper}>
                    {
                        work_data.map(el => <Work key={el.id} {...el} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorksPage;