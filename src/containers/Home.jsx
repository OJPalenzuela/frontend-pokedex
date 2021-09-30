import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

const Home = () => {
    const pokemons = useSelector(state => state.pokemons)
    return (
        <div>
            {
                pokemons.map((pokemon, id) => (
                    <Card pokemon={pokemon} key={id}/>
                ))
            }
            
        </div>
    )
}

export default Home
