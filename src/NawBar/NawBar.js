import React from  "react"
import {Link} from "react-router-dom";
import "./NawBar.css"

class NawBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
         <div  className="collapse navbar-collapse">
          <Link className="nav-logo"  to="/">
            MyTODØ
          </Link>
         </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <div className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/todoitem">Todoitem</Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link"  to="/about">About</Link>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NawBar;
