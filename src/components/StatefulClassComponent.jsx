import React, { Component } from "react";

class StatefulClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      productos: [
        { id: 1, name: "Yerba", quantity: 1 },
        { id: 2, name: "Azucar", quantity: 1 },
        { id: 3, name: "Tostadas", quantity: 1 },
      ],
      carrito: [],
    };
  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  decrementar() {
    if (this.state.contador > 0) {
      this.setState({
        contador: this.state.contador - 1,
      });
    }
  }

  handleProduct (id) {
        let producto = this.state.productos.find(producto => producto.id == id)

       let item = this.state.carrito.find(item => item.id === producto.id)
       if (item !== undefined) {
           producto.quantity = this.state.contador
           this.setState({
           carrito: [...this.state.carrito]
       })
       console.log(producto);
       }else{
        producto.quantity = this.state.contador
        this.setState({
            carrito: [...this.state.carrito, producto]})
            console.log(producto, "else");
       }   
    }


  render() {
        return (
            <>
                <h2>Componente de clase con estado </h2>
                <button onClick={() => this.decrementar()}/* {this.state.contador === 0 ? "disable" : ""} */>-</button>
                <span> {this.state.contador} </span>
                <button onClick={() => this.incrementar()}>+</button>
                <ol>
                   {
                    this.state.productos.map(producto => (
                        <li key={producto.id} onClick={() => this.handleProduct(producto.id)}>{producto.name}</li>
                    ))
                } 
                </ol>
                <h3>Carrito</h3>
                <ol>
                       {
                        this.state.carrito.map(producto => (
                            <li key={producto.id} onClick={() => this.handleProduct(producto.id)}>Producto: {producto.name} || Cantidad: {producto.quantity}</li>
                        ))
                }
                </ol>
             
            </>
        )
    }
}

export default StatefulClassComponent;
