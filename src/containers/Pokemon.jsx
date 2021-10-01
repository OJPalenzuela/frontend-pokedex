import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { Container, Img, Paragraph, typeColors } from '../assets/styles/style';
import { findPokemon } from '../redux/actions/pokemonActions';

import {ProgressBar} from 'react-bootstrap'

const Pokemon = () => {
    const params = useParams();
    const history = useHistory()
    const state = useSelector(state => state.pokemon)
    const dispatch = useDispatch()

    const [pokemon, setPokemon] = useState(state)

    const [colorOne, setColorOne] = useState("")
    const [colorTwo, setColorTwo] = useState("")

    const handleGoToHome = () => {
        history.push(`/`);
    };


    useEffect(() => {
        if (state === null || state === undefined || state.name !== params.name) {
            dispatch(findPokemon(params.name))
        }
        setPokemon(state)
        setColorOne(typeColors[pokemon.types[0].type.name])
        setColorTwo(pokemon.types[1] ? typeColors[pokemon.types[1].type.name] : typeColors[pokemon.types[0].type.name])
        
    }, [dispatch, pokemon, params, state])
    return (
        <Container
            background={`linear-gradient(to right,
                ${colorOne} 50%,
                ${colorTwo} 50%)`}
            height={"100%"}
            minHeight={"100vh"}
            padding={"16px"}
            direction={"column"}
            alignItems={"center"}
        >
            <Container width="100%" onClick={() => handleGoToHome()}>
                BACK
            </Container>
            <Container
                height={"100%"}
                maxWidth={"600px"}
                width={"100%"}
                minWidth={"400px"}
                background={"white"}
                direction={"column"}
            >
                <Container
                    className="text-capitalize"
                    background={colorOne}
                    filter={"contrast(0.5)"}
                    padding={"8px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Paragraph  >{pokemon.name}</Paragraph>
                </Container>
                <Container width={"100%"}>
                    <Container
                        width={"140px"}
                        height={"140px"}
                    >
                        <Img
                            width={"100%"}
                            height={"100%"}
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </Container>
                    <Container
                        width="calc(100% - 140px)"
                        direction="column"
                    >
                        <Container
                            width="100%"
                            height="40px"
                        >
                            <Container
                                width="100%"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Container
                                    width="auto"
                                    alignItems="center"
                                    justifyContent="space-around"
                                >
                                    {
                                        pokemon.types[0] ? (
                                            <Container
                                                className="text-uppercase"
                                                width={"auto"}
                                                background={typeColors[pokemon.types[0].type.name]}
                                                padding={"4px"}
                                                margin={"4px"}
                                            >
                                                <Paragraph
                                                    color={"white"}
                                                    weight={"bold"}
                                                    size={"12px"}
                                                >
                                                    {pokemon.types[0].type.name}
                                                </Paragraph>
                                            </Container>
                                        ) : null
                                    }
                                    {
                                        pokemon.types[1] ? (
                                            <Container
                                                className="text-uppercase"
                                                width={"auto"}
                                                background={typeColors[pokemon.types[1].type.name]}
                                                padding={"4px"}
                                                margin={"4px"}
                                            >
                                                <Paragraph
                                                    color={"white"}
                                                    weight={"bold"}
                                                    size={"12px"}
                                                >
                                                    {pokemon.types[1].type.name}
                                                </Paragraph>
                                            </Container>
                                        ) : null
                                    }
                                </Container>
                                <Container
                                    width="auto"
                                    alignItems="center"
                                    justifyContent="space-around"
                                    padding={"10px"}
                                >
                                    <Paragraph
                                        color={"black"}
                                    >
                                        #{pokemon.id}
                                    </Paragraph>
                                </Container>
                            </Container>
                        </Container>
                        <Container direction={"column"} padding={"10px"}>
                            {
                                pokemon.stats.map((info, key) => (
                                    <Container key={key} justifyContent={"space-between"}>
                                        <Paragraph className="text-uppercase" color={"black"}>
                                            {info.stat.name.replace("-", " ")}
                                        </Paragraph>
                                        <Container width="200px" alignItems={"center"}>
                                            <ProgressBar style={{"width": "100%"}} max="200" now={info.base_stat} label={`${info.base_stat}`} />
                                        </Container>
                                    </Container>
                                ))
                            }
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Pokemon
