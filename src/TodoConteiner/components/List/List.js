import React from "react"

class List extends React.Component{

  render() {
    const { inputText, array } = this.props;
    return(
      <div>
        <ul>
        {
          array.map((todo, index) =>(
            <li key={todo._id}> {todo.title} {index +1} </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default List