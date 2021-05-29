import React, { useState } from 'react'

const array = [
    { id: 1, name: "Get out of bed", deadline: "Wed Sep 13 2017" },
    { id: 2, name: "Brush teeth", deadline: "Thu Sep 14 2017" },
    { id: 3, name: "Eat breakfast", deadline: "Fri Sep 15 2017" },
    { id: 4, name: "Study code", deadline: "Sat Sep 16 2017" },
    { id: 5, name: "Go to shop", deadline: "Sun Sep 17 2017" }
]



function MyItem(props) {
    const [check, setCheck] = useState(false);

    const Check = (props) => {
        setCheck(!check)

    }




    return (
        <div>
            <input type="checkbox" onChange={Check} />
            <p style={{ textDecoration: check ? "line-through" : "none" }} >{props.name}</p>
        </div >
    )
}


function Deadline(props) {
    return (
        <div>
            <p>  {props.name}</p>
        </div >
    )
}



function Delete(props) {
    return (
        <button className="deleted-button" onClick={() => props.deleteItem(props.name)}> Delete</button>
    )
}


const AddButton = (props) => {
    return (
        <div>
            <button className="addTodo-button" onClick={props.item}> Add item</button>

        </div>
    )
}

export default function Main() {
    const [state, setState] = useState(array)
    const callState = () => {

        setState(prev => {
            return ([...prev, { id: Date.now(), name: 'something', deadline: "1 June 2021" }]
            )
        })

    }

    const deleteList = (id) => {
        setState(prev => {
            return (prev.filter(item => {
                return item.id !== id
            }
            )
            )
        })
    }
    return (
        <div>
            <AddButton item={callState} />

            {state.length > 0 ?
                state.map(item => {
                    return (
                        <span key={item.id} className="todo-item">

                            <MyItem name={item.name} />
                            <Deadline name={item.deadline} />
                            <Delete deleteItem={deleteList} name={item.id} />
                        </span>
                    )
                }) : "No items found"}



        </div>
    )



}



