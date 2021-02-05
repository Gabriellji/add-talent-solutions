import Card from './card/Card';
import Tabheader from '../dashboard/tabs-header/Tabheader';
import bananaImg from './images/banana.png';
import buildingImg from './images/building.png'

import './style.scss';

const Dashboard = () => (
    <section className="dashboard-main">
        <Tabheader/>
        <Card img={bananaImg} alt={"banana"}/>
        <Card img={buildingImg} alt={"building"}/>
    </section>
)

export default Dashboard;