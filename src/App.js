import './App.css';
import Home from './Components/Home/index'
import About from './Components/About/index'
import {Switch,Route} from 'react-router-dom'
import Menu from './Routes'
import Horror from './Components/Horror/index'
import Action from './Components/Action/index'
import Docs from './Components/Documentory/index'
function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/About' component={About}></Route>
        <Route path='/Horror' component={Horror}></Route>
        <Route path='/Action' component={Action}></Route>
        <Route path='/Documentory' component={Docs}></Route>
      </Switch>
        
        
    </div>
  )
}

export default App;
