import React, { useEffect } from 'react'
import Routers from '../routers/Router';
import "bootstrap/dist/css/bootstrap.min.css"

import { useDispatch } from 'react-redux';
import { findPokemons } from '../redux/actions/pokemonActions';
import {GlobalStyle} from '../assets/styles/style'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findPokemons())
    }, [dispatch])
    return (
        <>
        <GlobalStyle />
        <Routers />
        </>
    )
}

export default App
