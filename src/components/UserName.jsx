import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserName extends Component {
    constructor (props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount () {
        console.log('%c El componente montó ', 'color: green')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({users: data}))
        .catch(error => alert(error))
    }

    componentDidUpdate () {
        console.log('%c El componente se actualizó ', 'color: yellow')

    }

    componentWillUnmount () {
        console.log('%c El componente se desmontó ', 'color: red')
    }

    render() {
        return (
            <div>
                <h3>Nombre de usuario 2: {this.props.userName}</h3>
                {
                    this.state.users.length > 0 ? (
                        <ul>
                            {this.state.users.map(user => (
                                <li><Link to={`/user/${user.id}`}>{user.username}</Link></li>
                            ))}
                        </ul>
                    ) : <p>Cargando...</p>
                }
            </div>
        )
    }
}
