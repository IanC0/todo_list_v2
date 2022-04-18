import { useState } from 'react'
import App from "../App.js"

const Todo_form = (props) => {
    const [inputText, setInputText] = useState([])

    const updateInputText = (e) => {
        setInputText(e.target.value)
    }

    const AddListItemHandler = (e) => {
        e.preventDefault()
        props.addTodo({
            text: inputText,
            key: Math.floor(Math.random() * 100000)
        })
    }


    return (
        <form onSubmit={AddListItemHandler}>
            <input onChange = {updateInputText}/>
            <button type="submit">Submit</button> 
        </form>

    )
}

export default Todo_form