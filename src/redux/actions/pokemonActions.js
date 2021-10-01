import { getPokemonByName, getPokemons } from "../../services/pokemon"
import { types } from "../types/types"

const findPokemons = () => {
    return (dispacth) =>{
        getPokemons()
            .then((pokemons) => {
                dispacth({
                    type: types.getPokemons,
                    payload: pokemons
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

const findPokemon = (name) => {
    return (dispacth) =>{
        getPokemonByName(name)
            .then((pokemon) => {
                dispacth({
                    type: types.getPokemon,
                    payload: pokemon
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

const setPokemon = (pokemon) => ({
    type: types.getPokemon,
    payload: pokemon
})

const searchPokemon = (name) => {
    return (dispacth) =>{
        getPokemonByName(name)
            .then((pokemons) => {
                dispacth({
                    type: types.getPokemons,
                    payload: [pokemons]
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export {findPokemons, searchPokemon, findPokemon, setPokemon}