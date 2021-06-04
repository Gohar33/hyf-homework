import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



const FetchData = () => {
    const [value, setValue] = useState([])
    const [inputText, setInputText] = useState(" ")
    const [startDate, setStartDate] = useState(new Date());






    console.log(value)

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
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="Todo-Description">Todo Description </label>
                    <input type="text" id="Todo-Description" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="Todo-Deadline">
                    </label>Deadline:<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <button onClick={addTodos}>Add todo</button>
            </form>
            <ul>
                {value.map((todo) => <ItemList todo={todo} deleteFunc={deleteList} value={value} setInputText={setInputText} />)}
            </ul>
        </div >
    )
}


export default FetchData