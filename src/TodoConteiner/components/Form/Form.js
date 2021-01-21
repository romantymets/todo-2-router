import React from "react"
import List from "../List/List";

class Form extends React.Component {
  render() {
    const { onTextchange, onAddTodo } = this.props;
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
        <form onSubmit={onAddTodo}>
          <div className="form-group">
              <input
                onChange={onTextchange}
                type="text"
                className="form-control"
                placeholder="Enter Text"
                required/>
              <div className="invalid-feedback">
                Please enter
              </div>
            <br/>
                <button className="btn btn-primary">
                  Add Todo
                </button>
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default Form