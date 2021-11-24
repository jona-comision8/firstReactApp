import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const [ user, setUser ] = useState(null)
    let { id } = useParams()
    
    useEffect(()=>{
        function fetchUser () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.log(error))
        }
        fetchUser()
    }, [])
    console.log(user)

    return (
        <>
        {
            user ? 
            (
                <> 
                    <h3>{user.username}</h3> 
                    <p>{user.email}</p> 
                    <p>{user.phone}</p> 
                </>
            )
            : <p>Cargando...</p>
        }
           
        </>
    )
}

export default User
