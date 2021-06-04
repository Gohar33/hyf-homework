import React, { useState } from 'react'
import BorderStyle from './BorderStyle'

const ItemList = (props) => {
    const [check, setCheck] = useState(false)
    const [edit, setEdit] = useState(false)

    const [todoDesc, setTodoDesc] = useState(props.todo.description)
    console.log(props)
    console.log(props.deleteFunc)
    console.log(props.todo.id)


    const editTodo = () => {
        return setEdit(!edit)
    }

    const updateTodo = (id) => {
        const updateDescription = props.value.map(todo => {
            if (todo.id === id) {

                return props.todo.description = todoDesc
            }

            return todoDesc
        })
        props.setInputText(updateDescription)
        setEdit(false)
        props.setInputText("")

    }

    return (
        <BorderStyle>

            <li>
                <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                {!edit ? <span style={{ textDecoration: check ? "line-through" : "none" }}>{props.todo.description} | {props.todo.deadline}</span> : <input type="text" value={todoDesc} onChange={(e) => { setTodoDesc(e.target.value) }} />}
                <button onClick={() => props.deleteFunc(props.todo.id)}> Delete</button>
                {!edit ? <button onClick={editTodo}>Edit</button> : <button onClick={() => updateTodo(props.todo.id)}>Update</button>}
            </li>

        </BorderStyle >
    )
}

export default ItemList