import React from "react"

class Spiner extends React.Component {

  render() {
    return (
      <div>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
      </div>
    )
  }

}

export default Spiner