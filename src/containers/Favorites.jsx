import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SuperContainer, Container, Wrapper } from '../assets/styles/style'
import Card from '../components/Card'
import { listFavorite } from '../redux/actions/cardActions'

import {motion} from "framer-motion"
import { animations } from '../assets/animations/animations'
import Banner from '../components/Banner'

const Favorites = () => {
    const auth = useSelector(state => state.auth)
    const favorite = useSelector(state => state.favorite)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listFavorite(auth.uid))
    }, [dispatch, auth])

    return (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={animations.main.pageVariants}
        transition={animations.main.pageTransitions}
    >
        <SuperContainer>
            <Container direction="column" width="100%" justifyContent="center">
                <Banner site={"Favoritos"} />

                <Container width="100%" justifyContent="center">
                    <Wrapper justifyContent={"center"}>
                        {
                            favorite.map((pokemon, id) => (
                                <Card add={false} pokemon={pokemon} key={id} />
                            ))
                        }
                    </Wrapper>
                </Container>


            </Container>
        </SuperContainer>
        </motion.div>
    )
}

export default Favorites
