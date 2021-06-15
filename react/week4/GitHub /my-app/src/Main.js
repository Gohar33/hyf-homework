import React, { useState, useEffect } from 'react'



const Main = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        fetchUsers()

    }, [])

    const fetchUsers = (input) => {
        setLoading(true)
        const API_URL = `https://api.github.com/search/users?q=${input}`
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setUsers(data.items))
        setLoading(false)
    }
 


    return (
        <div>
            <input type='text' placeholder="User search" onChange={(e) => fetchUsers(e.target.value)} />
            {loading && <div>Loading...</div>}
            {users.length === 0 && <div>No results</div>}
            <ul>
                {users.map((user) => { return <li key={user.id}>{user.login}</li> })}
            </ul>
        </div>
    )
}

export default Main