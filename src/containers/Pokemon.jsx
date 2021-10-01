import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { findPokemon } from '../redux/actions/pokemonActions';

const Pokemon = () => {
    const params = useParams();
    const pokemon = useSelector(state => state.pokemon)
    const dispatch = useDispatch()

    useEffect(() => {
        if(pokemon === null || pokemon === undefined || pokemon.name !== params.name) {
            dispatch(findPokemon(params.name))
            console.log("Entro porque no exite")
         }
         console.log("F")
    }, [dispatch, pokemon, params])

    return (
        <div>
            
        </div>
    )
}

export default Pokemon
