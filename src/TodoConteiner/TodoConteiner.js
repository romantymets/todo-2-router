import React from "react"
import Api from "../Api/Api";
import Forma from "./components/Form/Forma";
import List from "./components/List/List";
import Spiner from "../Component/Spiner/Spiner";
import { Form } from 'react-bootstrap';
import classNames from "classnames";
import style from "./TodoConteiner.module.css"


const TODOONPAGE = 2;

class TodoConteiner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      array: [],
      createTodoSpiner: false,
      todoItemsRemoving: false,
      createTodoLoadSpiner:false,
      label:"Please change the background (  ) ",
      checked:false,
      bagraundStyle: "",
    };
    this.inputRef = React.createRef();
  };

  componentDidMount() {
    Api.get(`/todo?limit=${TODOONPAGE}`)
      .then((response) => {
        const { data } = response;
        this.setState({ array: data })
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  onTextchange = (e) => {
    this.setState({ inputText: e.target.value })
  };

  loadMore = () => {
    this.setState({ createTodoLoadSpiner: true });
    Api.get(`/todo?limit=${TODOONPAGE}&skip=${this.state.array.length}`)
      .then((response) => {
     const { data } = response;
     this.setState({
       array: [...this.state.array, ...data],
       createTodoLoadSpiner: false
     })
    })
      .catch((error) => {
        alert(error.message)
      })
  };

  deleteTodo = (_id) => {
    const findIndexElement = this.state.array.findIndex(todo => todo._id === _id);
    this.setState({ todoItemsRemoving: _id });
    Api.remove(`/todo/${_id}`)
      .then(() => {
        this.setState({ todoItemsRemoving: "" });
        const newTodo = [...this.state.array];
        newTodo.splice(findIndexElement, 1);
        this.setState({
          array: newTodo,
          inputText: ""
        })
      })
      .catch((error) => {
        alert(error.message)
      });
  };

  onAddTodo = (e) => {
    e.preventDefault();
    const inputText = this.state.inputText;
    const oldArray = this.state.array;
    this.setState({ createTodoSpiner: true });
    Api.post("/todo", {
      title: inputText,
    })
      .then((response) => {
        const { data } = response;
        this.setState({
          array: [...oldArray, data],
          createTodoSpiner: false,
        })
      })
      .catch((error) => {
        alert(error.message)
      });
    this.inputRef.current.value = "";
    this.inputRef.current.focus();
  };

  onItemCheck = (_id) => (e) => {
    const checked = e.target.checked;
    Api.patch(`/todo/${_id}`, { completed: checked })
      .then(() => {
        const currentTodo = this.state.array.find(todo => todo._id === _id);
        currentTodo.completed = checked;
        const newArrey = [];
        this.state.array.forEach((todo) => {
          if (todo._id === _id) {
            newArrey.push(currentTodo)
          } else {
            newArrey.push(todo)
          }
        });
        this.setState({ array: newArrey })
      })
      .catch((error) => {
        alert(error.message)
      })
  };
  todoChecked = () => {
    const todoChecked = this.state.array.filter((todo) => todo.completed === true)
    return todoChecked.length
  };

  onItemBackgroundCheck = (e) => {
    const checked = e.target.checked;
    if (checked) {
      this.setState({
        bagraundStyle: `${style['container-on']}`,
        label:"Please change the background  (On)"
      })
    }
    else {
      this.setState({
        bagraundStyle: "",
        label:"Please change the background  (Off)"
      })
    }
  };

  render() {
    const {
      todoItemsRemoving,
      array,
      createTodoSpiner,
      createTodoLoadSpiner,
      bagraundStyle
          } = this.state;
    const inputRef = this.inputRef;
    return (
      <div className={classNames("container", bagraundStyle )}>
        <div className="row">
          <div className="col">
            <h1> Add Todo </h1>
            <Forma
              onTextchange={this.onTextchange}
              onAddTodo={this.onAddTodo}
              createTodoSpiner={createTodoSpiner}
              inputRef={inputRef}
            />
            <List
              deleteTodo={this.deleteTodo}
              onItemCheck={this.onItemCheck}
              array={array}
              todoItemsRemoving={todoItemsRemoving}
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary"
                  disabled={createTodoLoadSpiner}
                  onClick={() => {this.loadMore()}}
          >
            {createTodoLoadSpiner ? <Spiner/> : <span>   Load More </span>}
          </button>
        </div>
        <br/>
        <div>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label= {this.state.label}
            // checked={}
            onChange ={(e) => this.onItemBackgroundCheck(e)}
          />
        </Form>
        </div>
        <footer>
          <div>
            <p> AllTodo: {array.length} </p>
            <p> Todo Checked : {this.todoChecked()} </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default TodoConteiner