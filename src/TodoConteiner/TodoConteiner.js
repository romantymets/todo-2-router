import React from "react"
import Api from "../Api/Api";
import Form from "./components/Form/Form";
import List from "./components/List/List";

class TodoConteiner extends React.Component {


  constructor(props) {
    super(props);
      this.state = {
        inputText: "",
        array: [],
        createTodoSpiner:false,
      }
    };

  componentDidMount() {
    Api.get("/todo")
      .then((response) => {
        const { data } = response;
        this.setState({ array: data})
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  onTextchange = (e) => {
    this.setState({inputText:e.target.value})
  };

  onAddTodo = (e) => {
    e.preventDefault();
    const inputText = this.state.inputText;
    const oldArray = this.state.array;
    this.setState({createTodoSpiner:true});
    Api.post("/todo" ,{
      title: inputText,
    })
      .then((response) => {
        const { data } = response;
        this.setState({
          array:[...oldArray, data],
          createTodoSpiner:false
        })
      })
      .catch((error) =>{
        alert(error.message)
      } )
  };

  render() {
    const { inputText, array } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <h1> Add Todo </h1>
        <Form
          onTextchange ={this.onTextchange}
          onAddTodo ={this.onAddTodo}
        />
        <List
          inputText = {inputText}
          array = {array}
        />
        </div>
        </div>
      </div>
    )
  }
}

export default TodoConteiner