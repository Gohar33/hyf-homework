
function Checkbox() {
    return (
        <div>
            <input type="checkbox" />
        </div>
    )
}

function MyItem(props) {
    return (
        <div>
            <p>{props.name}</p>
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


function Main() {
    const array = [
        { id: 1, name: "Get out of bed", deadline: "Wed Sep 13 2017" },
        { id: 2, name: "Brush teeth", deadline: "Thu Sep 14 2017" },
        { id: 3, name: "Eat breakfast", deadline: "Fri Sep 15 2017" },
        { id: 4, name: "Study code", deadline: "Sat Sep 16 2017" },
        { id: 5, name: "Go to shop", deadline: "Sun Sep 17 2017" }
    ]
    return (
        <div>
            {array.map(item => {
                return (
                    <span key={item.id} className="todo-item">
                        <Checkbox />
                        <MyItem name={item.name} />
                        <Deadline name={item.deadline} />
                    </span>
                )
            })

            }

        </div>
    )
}

export default Main