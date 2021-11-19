import React, { Component } from 'react'
import UserName from './UserName';

export default class CicloDeVida extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: "",
            show: false
        }
    }

    componentDidMount () {
        console.log("El componente se montó por primera vez")
    }

    componentDidUpdate () {
        console.log('%c El componente se actualizó ', 'background: #222; color: #bada55');
    }

    handleUsername (e) {
        this.setState({ user: e.target.value })
    }

    show () {
        if(this.state.show){
            this.setState({
                show: false
            })
        }else{
            this.setState({
                show: true
            })
        }
    }

    render() {
        console.log("Renderizó")
        return (
            <div>
                <h2>CicloDeVida</h2>
                <input type="text" placeholder="Usuario" onBlur={(e)=> this.handleUsername(e)}/>
                <h3>Usuario: {this.state.user}</h3>
                <button onClick={() => this.show()}>Mostrar</button>
                	{
                        this.state.show && <UserName userName={this.state.user}/>
                    }
            </div>
        )
    }
}

