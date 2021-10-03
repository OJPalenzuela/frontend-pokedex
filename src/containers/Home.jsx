import React from 'react'
import { useSelector } from 'react-redux'
import { Img, SuperContainer, Wrapper, Paragraph, Container } from '../assets/styles/style'
import Card from '../components/Card'
import Search from '../components/Search'
import logo from "../assets/svg/pokedex.svg"

const Home = () => {
    const pokemons = useSelector(state => state.pokemons)
    return (
        <SuperContainer>
            <Wrapper>
                <Container
                    direction="column"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    margin="24px 0px"
                >
                    <Container width="100%" justifyContent="center" alignItems="center" >
                        <Container>
                            <Container justifyContent="center" alignItems="center">
                                <Img src={logo} width="140px" />
                            </Container>
                            <Container
                            justifyContent="center" alignItems="center"
                            left="-40px"
                            position="relative"
                            >

                                <Paragraph
                                    color={"black"}
                                    size={"60px"}
                                    weight={"bold"}
                                >
                                    Pokédex
                                </Paragraph>
                            </Container>
                        </Container>
                    </Container>

                    <Container margin={"24px 0px"} width="100%" justifyContent={"center"} alignItems={"center"}>

                        <Search />
                    </Container>
                </Container>
                <Wrapper justifyContent={"center"}>
                    {
                        pokemons.map((pokemon, id) => (
                            <Card add={true} pokemon={pokemon} key={id} />
                        ))
                    }
                </Wrapper>

            </Wrapper>
        </SuperContainer>
    )
}

export default Home
