import { Switch, Route } from "react-router-dom";
import Navbar from './components/nav/Navbar';
import Dashboard from './components/pages/dashboard/Dashboard';
import Customer from './components/pages/customer/Customer';
import Shopping from './components/pages/shopping/Shopping';

const App = () => {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/customer" component={Customer}/>
        <Route path="/shopping" component={Shopping}/>
      </Switch>
    </div>
  );
}

export default App;
