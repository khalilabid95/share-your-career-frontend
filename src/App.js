import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home';
import register from './pages/register';



function App() {
  return (
    <Router >
      <Switch>
      <Route exact path='/' component={home} /> 
      <Route path='/register' component={register} /> 
      </Switch>
    </Router>

  );
}

export default App;
