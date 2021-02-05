import Card from './card/Card';
import bananaImg from './images/banana.png';
import buildingImg from './images/building.png'

import './style.scss';

const Dashboard = () => (
    <section className="dashboard-main">
        <Card img={bananaImg} alt={"banana"}/>
        <Card img={buildingImg} alt={"building"}/>
    </section>
)

export default Dashboard;