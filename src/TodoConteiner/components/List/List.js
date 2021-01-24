import React from "react"
import { withRouter } from "react-router-dom";
import Spiner from "../../../Component/Spiner/Spiner";
import style from "./List.module.css"

class List extends React.Component {

  onItemClick = (todo) => () => {
    this.props.history.push(`/todoitem${todo._id}`);
  };

  render() {
    const { array, deleteTodo, todoItemsRemoving, onItemCheck } = this.props;
    return (
      <div>
        <ul className={style.ulContainer}>
          {
            array.map((todo, index) => (
              <div className="container">
                <div className="row">
                  <div className="col-12"  onClick={this.onItemClick(todo)}>
                    <li key={todo._id} className={style.item}>
                      <div className={todo.completed ? style.liConteinerCheckbox : style.liConteiner}>
                        <div className="col-2">
                            <input
                              type="checkbox"
                              checked={todo.completed}
                              onChange={onItemCheck(todo._id)}
                              onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                      <div className="col-2">
                        {index + 1}
                      </div>
                      <div className="col-6">
                        {todo.title}
                      </div>
                      <div className="col-3">
                        <button
                          disabled={todoItemsRemoving === todo._id}
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTodo(todo._id);
                          }}>
                          { todoItemsRemoving === todo._id ? <Spiner/> : <span> Delete </span>}
                        </button>
                      </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            ))}
        </ul>
      </div>
    )
  }
}

export default withRouter(List)