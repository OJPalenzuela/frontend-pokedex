import Swal from "sweetalert2"
import { getInfoEvolution, getPokemonByName, getPokemons, getSpecies } from "../../services/pokemon"
import { types } from "../types/types"

const findPokemons = () => {
    return (dispacth) => {
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
    return (dispacth) => {
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

const findEvolution = (url) => {
    return (dispacth) => {
        getSpecies(url)
            .then((pokemon) => {
                dispacth({
                    type: types.setEvolution,
                    payload: pokemon
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

const findInfoEvolution = (array) => {
    return (dispacth) => {
        getInfoEvolution(array)
            .then((pokemon) => {
                dispacth({
                    type: types.getInfoEvolution,
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
    return (dispacth) => {
        getPokemonByName(name)
            .then((pokemons) => {
                dispacth({
                    type: types.getPokemons,
                    payload: [pokemons]
                })
            })
            .catch((e) => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `No se encontraron resultados para ${name}`,
                })
            })
    }
}

export { findPokemons, searchPokemon, findPokemon, setPokemon, findEvolution, findInfoEvolution }