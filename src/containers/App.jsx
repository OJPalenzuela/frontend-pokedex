import React, { useEffect } from 'react'
import Routers from '../routers/Router';


import { findPokemons } from '../redux/actions/pokemonActions';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findPokemons())
    }, [dispatch])
    return (
        <Routers />
    )
}

export default App
