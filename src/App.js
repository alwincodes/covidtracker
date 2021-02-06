import React, {Component} from 'react';
import India from "./components/India";
import World from "./components/World";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

class App extends Component{

  render(){
    return(
      <div className="container-fluid">
       <Router>
         <Header/>
         <Switch>
           <Route exact path = "/">
             <India/>
           </Route>
           <Route exact path = "/india">
             <India/>
           </Route>
           <Route exact path = "/world">
             <World/>
           </Route>
         </Switch>

       </Router>
      </div>
    );
  }
}

export default App;