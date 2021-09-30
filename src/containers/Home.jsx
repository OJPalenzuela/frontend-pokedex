import React from 'react'
import { useSelector } from 'react-redux'
import { SuperContainer, Wrapper } from '../assets/styles/style'
import Card from '../components/Card'

const Home = () => {
    const pokemons = useSelector(state => state.pokemons)
    return (
        <SuperContainer>
            <Wrapper>
            {
                pokemons.map((pokemon, id) => (
                    <Card pokemon={pokemon} key={id}/>
                ))
            }
            </Wrapper>
        </SuperContainer>
    )
}

export default Home
