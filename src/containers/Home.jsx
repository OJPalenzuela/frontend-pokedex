import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SuperContainer, Wrapper } from '../assets/styles/style'
import Card from '../components/Card'
import Search from '../components/Search'

const Home = () => {
    const pokemons = useSelector(state => state.pokemons)
    return (
        <SuperContainer>
            <Container direction="column">
                <h1>
                    Pokedex
                </h1>
                <Container>
                    <Search />
                </Container>
                <Wrapper>
                    {
                        pokemons.map((pokemon, id) => (
                            <Card add={true} pokemon={pokemon} key={id} />
                        ))
                    }
                </Wrapper>

            </Container>
        </SuperContainer>
    )
}

export default Home
