import React, {useState, useEffect} from 'react'

function PokeComponent() {
    const [pokemones, setPokemones] = useState([])
    const [pokeDetail, setPokeDetail] = useState(null)
    const [pokeIndex, setPokeIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        function fetchPokemons () {
            fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => {
                if(res.ok){
                    return res.json()
                }else{
                    throw {
                        status: res.status,
                        errorMsg: "Falló el pedido"
                    }
                }
            })
            .then(data => {
                setPokemones(data.results)
                setIsLoading(false)
            })
            .catch((error) => console.log(error.errorMsg ? error.errorMsg : "Error de Red"));
        }
        fetchPokemons()
    }, [])

    useEffect(() => {
        setIsLoading(true)
        function fetchPokemon () {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
            .then(res => {
                if(res.ok){
                    return res.json()
                }else{
                    throw {
                        status: res.status,
                        errorMsg: "Falló el pedido"
                    }
                }
            })
            .then(data => {
                setPokeDetail(data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error.errorMsg ? error.errorMsg : "Error de Red"));
        }
        fetchPokemon()
    }, [pokeIndex])

    return (
        <div>
            { isLoading && <p>Cargando...</p> }
            {
                pokeIndex === 0 ?
                pokemones.map((pokemon, index) => (
                   <p key={index} onClick={() => setPokeIndex(index + 1)} style={{cursor: "pointer"}}>
                       {pokemon.name}
                   </p> 
                ))
                : pokeDetail !== null && (
                    <div>
                        <p>{pokeDetail.name}</p>
                        <p>{pokeDetail.base_experience}</p>
                        <img src={pokeDetail.sprites.front_default} alt={pokeDetail.name} />
                    </div>
                )
            }
            <button onClick={()=> setPokeIndex(0)}>Listado de pokemones</button>
        </div>
    )
}

export default PokeComponent
