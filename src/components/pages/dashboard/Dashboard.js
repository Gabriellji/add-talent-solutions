import CardList from "./card-list/CardList";

import "./style.scss";

const Dashboard = (props) => {
    console.log(props)
    return (
        <div className="dashboard-main">
        <CardList />
      </div>
    )
}


export default Dashboard;
