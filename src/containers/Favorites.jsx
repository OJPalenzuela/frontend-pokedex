import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SuperContainer, Container, Wrapper } from '../assets/styles/style'
import Card from '../components/Card'
import { listFavorite } from '../redux/actions/cardActions'

const Favorites = () => {
    const auth = useSelector(state => state.auth)
    const favorite = useSelector(state => state.favorite)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listFavorite(auth.uid))
    }, [dispatch, auth])

    return (
        <SuperContainer>
            <Container direction="column">
                <Container width="100%" justifyContent={"center"}>
                    <h1>
                        Favorites
                    </h1>
                </Container>

                <Container width="100%" justifyContent="center">
                    <Wrapper justifyContent={"flex-start"}>
                        {
                            favorite.map((pokemon, id) => (
                                <Card add={false} pokemon={pokemon} key={id} />
                            ))
                        }
                    </Wrapper>
                </Container>


            </Container>
        </SuperContainer>
    )
}

export default Favorites
