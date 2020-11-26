import React from "react"
import './styles.css';
import todosData from "./todosData"

import TodoItem from "./TodoItem"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todos:todosData
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(id){
    console.log("changed",id)
  }

  render(){
    const todoItems=this.state.todos.map(item=> 
     <TodoItem key={item.id} item={item}
      handleChange={this.handleChange}
    />)

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}

export default App;
