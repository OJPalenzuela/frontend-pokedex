import React, { useEffect } from 'react'
import Routers from '../routers/Router';
import "bootstrap/dist/css/bootstrap.min.css"


import { infoPokemons } from '../redux/actions/pokemonActions';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(infoPokemons())
    }, [dispatch])
    return (
        <Routers />
    )
}

export default App
