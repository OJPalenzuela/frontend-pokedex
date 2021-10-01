import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2"


const getPokemonByName = async (name) => {
    const url = `${BASE_URL}/pokemon/${name}`
    const {data} = await axios.get(url)
    return data
}

const getPokemons = async () => {
    let res = []
    for (let i = 1; i <= 25; i++) {
        let data = await getPokemonByName(i)
        res = [...res, data]
    }
    return res
}

export {getPokemons, getPokemonByName}