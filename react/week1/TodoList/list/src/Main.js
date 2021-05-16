
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
        { name: "Get out of bed", deadline: "Wed Sep 13 2017" },
        { name: "Brush teeth", deadline: "Thu Sep 14 2017" },
        { name: "Eat breakfast", deadline: "Fri Sep 15 2017" },
        { name: "Study code", deadline: "Sat Sep 16 2017" },
        { name: "Go to shop", deadline: "Sun Sep 17 2017" }
    ]
    return (
        <div className>
            {array.map(item => {
                return (
                    <span className="todo-item">
                        <Checkbox />
                        <MyItem key={item.id} name={item.name} />
                        < Deadline key={item.id} name={item.deadline} />
                    </span>
                )
            })

            }

        </div>
    )
}

export default Main