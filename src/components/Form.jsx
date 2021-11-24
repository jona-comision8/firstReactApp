import React, {useState, useEffect} from 'react'

function Form() {
    const [ userData, setUserData ] = useState({
        name: "",
        phone: "",
        country: ""
    })

    useEffect(() => {
        console.log("useEffect: Render del componente")
    })

    useEffect(() => {
        console.log("useEffect2: Primer render de componente")
        if(localStorage.getItem('userName')){
            setUserData({...userData, name: localStorage.getItem('userName')})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('userName', userData.name)
    }, [userData])

    return (
        <form action="">
            <input type="text" placeholder="Nombre" value={userData.name} onBlur={(e) => setUserData({...userData, name: e.target.value})}/><br />
            <input type="text" placeholder="Teléfono" onBlur={(e) => setUserData({...userData, phone: e.target.value})}/><br />
            <select name="" id="" onChange={(e) => setUserData({...userData, country: e.target.value})}>
                <option value="ar">Argentina</option>
                <option value="cl">Chile</option>
                <option value="br">Brasil</option>
            </select><br />
            <hr />
            <p>Nombre: {userData.name}</p>
            <p>Teléfono: {userData.phone}</p>
            <p>País: {userData.country}</p>
            <br />
            {
               localStorage.getItem('userName') && <h3>{localStorage.getItem('userName')}</h3>
            }
        </form>
    )
}

export default Form
