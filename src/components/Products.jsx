import React, {useState, useEffect} from 'react'

let products = [
    {id: 1, name: "Producto 1", category: 1},
    {id: 2, name: "Producto 2", category: 2},
    {id: 3, name: "Producto 3", category: 1},
    {id: 4, name: "Producto 4", category: 2},
]

let categories = [1, 2]
function Products() {
    const [productos, setproductos] = useState(products)
    const [categorias, setcategorias] = useState(categories)
    const [categorySelected, setcategorySelected] = useState(null)
    const [productosFiltrados, setproductosFiltrados] = useState([])


    function handleCategory (e) {
        setcategorySelected(e.target.textContent)
    }

    console.log(categorySelected)

    useEffect(() => {
        let productosFiltrados = productos.filter(product => product.category === +categorySelected)
        setproductosFiltrados(productosFiltrados)
    }, [categorySelected])

    return (
        <div>
            {
                productosFiltrados.length > 0 && categorySelected !== null ? (
                    <ul>
                    { productosFiltrados.map(product => (
                        <li>{product.name}</li>
                    ))}
                    </ul>

                ) : (
                    <ul>
                    { productos.map(product => (
                        <li>{product.name}</li>
                    ))}
                    </ul>
                )

            }
            <button onClick={() => setcategorySelected(null)}>Volver</button>

            <ol>
            
               { categorias.map(category => (
                   <li onClick={(e) => handleCategory(e)}>{category}</li>
               ))}
           
            </ol>
        </div>
    )
}


export default Products
