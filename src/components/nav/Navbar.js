import { Link } from 'react-router-dom';
import dashboardImg from './icons/dashboard.png';
import shopping from './icons/shopping.png';
import customer from './icons/customer.png';

const Navbar = () => (
    <div>
        <Link to="/"><img src={dashboardImg} alt="dashboard icon"></img></Link>
        <Link to="/customer"><img src={customer} alt="customer icon"></img></Link>
        <Link to="/shopping"><img src={shopping} alt="shopping list icon"></img></Link>
    </div>
)

export default Navbar;