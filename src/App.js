import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';
 

function App() {
  return (
    <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = '/about' component = {About}/>
      <Route exact path = '/projects' component = {Projects}/>
    </Switch>
  );
}

export default App;
