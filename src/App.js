
import Navbar from './Components/Navbar';
// import Spinner from './Components/Spinner';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import News from './Components/News';
import "./index.css"
import Dark from './Components/Dark'

toast.configure();
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Dark/>
        <Switch>
          <Route exact path="/home">
          <News key="general" pageSize={15} category="general"/>
          </Route>
          <Route exact path="/">
          <News key="general" pageSize={15} category="general"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports" pageSize={15} category="sports"/>
          </Route>
          <Route exact path="/technology">
          <News key="technology" pageSize={15} category="technology"/>
          </Route>
          <Route exact path="/entertainment">
          <News key="entertainment" pageSize={15} category="entertainment"/>
          </Route>
          <Route exact path="/health">
          <News key="health" pageSize={15} category="health"/>
          </Route>
          <Route exact path="/business">
          <News key="business" pageSize={15} category="business"/>
          </Route>
          <Route exact path="/science">
          <News key="science" pageSize={15} category="science"/>
          </Route>
        </Switch>
        
      </div>
      </Router>
    )
  }
}

