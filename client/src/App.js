import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './App.css';
// Components
import MainPage from './container/Mainpage';
import BackApp from './container/Backapp';
export default class App extends Component
{
  render()
  {
    return(
      <div className='App'>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/backapp" component={BackApp}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
