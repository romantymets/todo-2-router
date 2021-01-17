import React from "react"

class List extends React.Component{

  render() {
    const { inputText } = this.props;
    return(
      <div>
        {inputText}
      </div>
    )
  }
}
export default List