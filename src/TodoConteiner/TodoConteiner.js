import React from "react"
import api from "../api/api";
import Form from "./components/Form/Form";
import List from "./components/List/List";

class TodoConteiner extends React.Component {


  constructor(props) {
    super(props);
      this.state = {
        inputText: "",
      }
    };
  onTextchange = (e) => {
    this.setState({inputText:e.target.value})
  };

  render() {
    const { inputText } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <h1> Add Todo </h1>
        <Form
          onTextchange ={this.onTextchange}
        />
        <List
          inputText = {inputText}
        />
        </div>
        </div>
      </div>
    )
  }
}

export default TodoConteiner