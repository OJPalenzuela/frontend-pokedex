import { getPokemons, idPokemon } from "../../services/pokemon"
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

const infoPokemons = () => {
    return (dispacth) =>{
        idPokemon()
            .then((pokemon) => {
                dispacth({
                    type: types.getPokemons,
                    payload: pokemon
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export {findPokemons, infoPokemons}