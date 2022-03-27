import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './pages/home';
import register from './pages/register';
import tech from './pages/tech';



function App() {
  return (
    <Router >
      <Switch>
      <Route exact path='/' component={home} /> 
      <Route exact path='/technologies' component={tech} /> 
      <Route path='/register' component={register} /> 
      </Switch>
    </Router>

  );
}

export default App;
