import React from "react"
import Spiner from "../../../Component/Spiner/Spiner";

class Form extends React.Component {
  render() {
    const { onTextchange, onAddTodo, createTodoSpiner,inputRef } = this.props;
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
                required
                ref={inputRef}
                />
              <div className="invalid-feedback">
                Please enter
              </div>
            <br/>
            <button className="btn btn-primary" disabled ={createTodoSpiner} >
              { createTodoSpiner ? <Spiner/> : <span>   Add Todo </span> }
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