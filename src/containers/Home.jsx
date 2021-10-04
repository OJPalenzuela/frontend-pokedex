import React from 'react'
import { useSelector } from 'react-redux'
import { SuperContainer, Wrapper, Container } from '../assets/styles/style'
import Card from '../components/Card'
import Search from '../components/Search'
import Banner from '../components/Banner'

import {motion} from "framer-motion"
import { animations } from '../assets/animations/animations'



const Home = () => {
    const pokemons = useSelector(state => state.pokemons)
    const {name} = useSelector(state => state.auth)
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={animations.main.pageVariants}
            transition={animations.main.pageTransitions}
        >
        <SuperContainer>
            <Wrapper>
                <Container
                    direction="column"
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    margin="24px 0px"
                >
                    <Banner site={name}/>

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
        </motion.div>
    )
}

export default Home
