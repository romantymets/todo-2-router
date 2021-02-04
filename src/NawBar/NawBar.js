import React from  "react"
import {Link} from "react-router-dom";
import "./NawBar.css"

class NawBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isDisplay: false,
    };
  }

componentDidMount() {
  document.addEventListener('mousedown', this.handleClickOutside);
}

componentWillUnmount() {
  document.removeEventListener('mousedown', this.handleClickOutside);
}

setWrapperRef = (node) =>  {
  this.wrapperRef = node;
};

handleClickOutside = (event) => {
  if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
    this.setState({ isDisplay: false })
  }
};

onButtonClick = () => {
  const isDisplay = this.state.isDisplay;
  this.setState({ isDisplay: !isDisplay })
};

  render() {
    const { isDisplay } = this.state;
    return (
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-md navbar-light bg-light" ref={this.setWrapperRef}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                  onClick={this.onButtonClick}
                  >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-logo"  to="/">
            MyTODØ
          </Link>
          <div className={`collapse ${isDisplay ? "show" : ""} navbar-collapse`} id="navbarNav">
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
