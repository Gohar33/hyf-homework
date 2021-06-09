import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



const FetchData = () => {
    const [value, setValue] = useState([])
    const [inputText, setInputText] = useState(" ")
    const [startDate, setStartDate] = useState(new Date());


    const API_URL = 'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw'

    const FetchApi = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(result =>
                setValue(result)
            )
    }

    useEffect(() => {
        FetchApi()
    }, [])

    const deleteList = (id) => {
        const FilterValue = value.filter(item => item.id !== id)
        return setValue(FilterValue)
    }

    const addTodos = () => {
        setValue((prev) => [...prev, {
            id: Date.now(), description: inputText, deadline: startDate.toLocaleDateString()
        }])
    }

    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className="Form">
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="Todo-Description" className="label">Todo Description </label>
                    <input type="text" id="Todo-Description" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="Todo-Deadline" className="label" ><br />Deadline
                    </label> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /><br />
                </div>
                <br />
                <button onClick={addTodos}>Add todo</button>
            </form>
            <ul>

                {value.map((todo) => <ItemList todo={todo} key={todo.id} deleteFunc={deleteList} value={value} setValue={setValue} />)}
            </ul>
        </div >
    )
}


export default FetchData