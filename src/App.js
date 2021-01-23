import React from  "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NawBar from "./NawBar/NawBar"
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
import TodoItem from "./TodoItem/TodoItem";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


class App  extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div className="container">
               <NawBar/>
              <Switch>
                <Route path="/about">
                <AboutPage/>
                </Route>
                <Route path="/todoitem">
                  <TodoItem/>
                </Route>
                <Route exact path="/">
                  <HomePage/>
                </Route>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
