import {useState} from 'react'
import './App.css';
import Todo_form from './todo_components/Todo_form'

const App = () => {
  const [todoArray, setTodoArray] = useState([])
  const [completedArray, setCompletedArray] = useState([])
  
  const addTodoFunction = (todo) => {
    setTodoArray([todo, ...todoArray])
  }

  const completeTodoFunction = (todo) => {
    let tempArray = ([...todoArray])
    let tempCompletedArray = ([...completedArray])
    let findArrayItemToComplete = tempArray.findIndex(element => element.key == todo.key)    
    tempCompletedArray.unshift(tempArray[findArrayItemToComplete])
    tempArray.splice(findArrayItemToComplete,1)
    setTodoArray([...tempArray])
    setCompletedArray([...tempCompletedArray])
    }

    const returnTodoToListFunction = (todo) => {
      setTodoArray([todo,...todoArray])
      let tempCompletedArray = ([...completedArray])
      let findArrayItemToComplete = tempCompletedArray.findIndex(element => element.key == todo.key);
      tempCompletedArray.splice(findArrayItemToComplete,1)
      setCompletedArray([...tempCompletedArray])
    }
  
  const closeTodoFunction = (todo) => {
    let tempArray = ([...todoArray])
    let findArrayItemToDelete = tempArray.findIndex(element => element.key == todo.key)
    tempArray.splice(findArrayItemToDelete,1)
    setTodoArray([...tempArray])
  }
  const closeCompletedTodoFunction = (todo) => {
    let tempArray = ([...completedArray])
    let findArrayItemToDelete = tempArray.findIndex(element => element.key == todo.key)
    tempArray.splice(findArrayItemToDelete,1)
    setCompletedArray([...tempArray])
  }

  return (
    <div id="body">
      <h1>Todo List</h1>

      <Todo_form addTodo={addTodoFunction}/>
    <h2>Outstanding</h2>
      {/* list of items */}
      <div className="outstanding">
      {todoArray.map(x => {
        return(
          <div className="listItem" key={x.key} >
            <div className="checkAndText">
            <input type="checkbox" onClick={() => completeTodoFunction(x)}/>
            <p>{x.text}</p>
            </div>
            <div id="closeButton" onClick={() => closeCompletedTodoFunction(x)}><p>x</p></div>
          </div>
        )
      })}
      </div>
      <h2>Completed</h2>
      {/* list of completed items */}
      <div className="completed">
      {completedArray.map(x => {
        return(
          <div className="listItem" key={x.key}>
            <div className="checkAndText">
            <input type="checkbox" onClick={() => returnTodoToListFunction(x)} checked/>
            <p>{x.text}</p>
            </div>
            <div id="closeButton" onClick={() => closeCompletedTodoFunction(x)}><p>x</p></div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App;
