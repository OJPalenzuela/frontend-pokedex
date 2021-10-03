import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2"


const getPokemonByName = async (name) => {
    const url = `${BASE_URL}/pokemon/${name}`
    const { data } = await axios.get(url)
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

const getSpecies = async (url) => {
    const { data } = await axios.get(url);
    const { chain } = await getChain(data.evolution_chain.url)
    const list = [
        chain.species.name
    ]

    if (chain?.evolves_to[0]?.species?.name !== null ||
        chain?.evolves_to[0]?.species?.name !== undefined) {
        list.push(
            chain.evolves_to[0]?.species?.name)
    }

    if (chain?.evolves_to[0]?.evolves_to[0]?.species?.name !== null ||
        chain?.evolves_to[0]?.evolves_to[0]?.species?.name !== undefined) {
        list.push(
            chain.evolves_to[0]?.evolves_to[0]?.species?.name)
    }

    const res = getInfoEvolution(list)

    return res
}

const getInfoEvolution = async (array) => {
    let res = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null || array[i] !== undefined) {
            if (array[i] === undefined) {
                break
            }
            let data = await getPokemonByName(array[i])
            res = [...res, {
                "name": data.name,
                "image": data.sprites.front_default
            }]
        }

    }
    return res
}

const getChain = async (url) => {
    const { data } = await axios.get(url);

    return data
}

export { getPokemons, getPokemonByName, getSpecies, getInfoEvolution }