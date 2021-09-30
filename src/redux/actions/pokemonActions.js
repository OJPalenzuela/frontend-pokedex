import { getPokemons } from "../../services/pokemon"
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

export {findPokemons}