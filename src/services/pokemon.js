import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2"

const getPokemons = async () => {
    const url = `${BASE_URL}/pokemon?limit=25`
    const {data} = await axios.get(url)
    console.log(data.results)
    return data.results
}

const getAllPokemons = async () => {
    
}

export {getPokemons}