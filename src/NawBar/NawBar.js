import React from  "react"
import {Link} from "react-router-dom";
import "./NawBar.css"

class NawBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      click: "collapse navbar-collapse",
    }
  }
  onbuttonClick = () => {
    this.setState({  click: "collapse show navbar-collapse"})
  };
  onbuttonClick2 = () => {
    this.setState({  click: "collapse navbar-collapse"})
  };

  render() {
    const { click } = this.state;
    return (
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                  onClick={() => {
                    this.onbuttonClick();
                  }
                  }>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-logo"  to="/">
            MyTODØ
          </Link>
          <div className={click} id="navbarNav">
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
