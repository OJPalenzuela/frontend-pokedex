import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { ARROW, BACK, backgoundColors, Container, Img, Paragraph, START, typeColors } from '../assets/styles/style';
import { findEvolution, findPokemon, resetEvolution } from '../redux/actions/pokemonActions';

import { ProgressBar } from 'react-bootstrap'

import { FaRulerVertical } from 'react-icons/fa'
import { RiScales2Fill } from 'react-icons/ri'

import {motion} from "framer-motion"
import { animations } from '../assets/animations/animations';
import { statsPokemon, typesPokemon } from '../helpers/diccionario';



const Pokemon = () => {
    const params = useParams();
    const history = useHistory()
    const state = useSelector(state => state.pokemon)
    const evolution = useSelector(state => state.evolution)
    const dispatch = useDispatch()

    const [pokemon, setPokemon] = useState(state)

    const [colorOne, setColorOne] = useState("")
    const [colorTwo, setColorTwo] = useState("")

    const handleGoToHome = () => {
        dispatch(resetEvolution())
        history.push(`/`);
    };



    useEffect(() => {
        if (state === null || state === undefined || state.name !== params.name) {
            dispatch(findPokemon(params.name))
        }
        setPokemon(state)
        setColorOne(typeColors[pokemon.types[0].type.name])
        setColorTwo(pokemon.types[1] ? typeColors[pokemon.types[1].type.name] : typeColors[pokemon.types[0].type.name])

        dispatch(findEvolution(pokemon.species.url))
        window.scrollTo(0, 0)
    }, [dispatch, pokemon, params, state])

    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={animations.info.pageVariants}
        transition={animations.info.pageTransitions}
        >

        
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
            <Container width="100%" >
                <Container
                    onClick={() => handleGoToHome()}
                    background={backgoundColors[pokemon.types[0].type.name]}
                    justifyContent={"center"}
                    alignItems={"center"}
                    radius={"6px"}
                    width={"40px"}
                >
                    <BACK size={"30"} color={"white"} />
                </Container>
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
                    background={backgoundColors[pokemon.types[0].type.name]}
                    padding={"8px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Paragraph  >{pokemon.name}</Paragraph>
                </Container>
                <Container padding="12px" width={"100%"}>
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
                                padding={"10px"}
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
                                                    {typesPokemon[pokemon.types[0].type.name]}
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
                                                    {typesPokemon[pokemon.types[1].type.name]}
                                                </Paragraph>
                                            </Container>
                                        ) : null
                                    }
                                </Container>
                                <Container
                                    width="auto"
                                    alignItems="center"
                                    justifyContent="space-around"
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
                                        <Paragraph className="text-capitalize" color={"black"}>
                                            {statsPokemon[info.stat.name.replace("-", "")]}
                                        </Paragraph>
                                        <Container width="200px" alignItems={"center"}>
                                            <ProgressBar style={{ "width": "100%" }} max="200" now={info.base_stat} label={`${info.base_stat}`} />
                                        </Container>
                                    </Container>
                                ))
                            }
                        </Container>
                    </Container>
                </Container>
                <Container
                    className="text-capitalize"
                    background={backgoundColors[pokemon.types[0].type.name]}
                    padding={"8px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Paragraph
                    >Perfil</Paragraph>
                </Container>
                <Container
                    padding={"12px"}
                    direction="column"
                    alignItems={"center"}>
                    <Container margin="4px" alignItems="center">
                        <FaRulerVertical color={"black"} size={"20"} />
                        <Paragraph weight={"bold"} color="black">
                            Altura: {pokemon?.height / 10} m
                        </Paragraph>
                    </Container>
                    <Container margin="4px" alignItems="center">
                        <RiScales2Fill color={"black"} size={"20"} />
                        <Paragraph weight={"bold"} color="black">
                            Peso: {pokemon?.weight / 10} kg
                        </Paragraph>
                    </Container>
                </Container>
                <Container
                    className="text-capitalize"
                    background={backgoundColors[pokemon.types[0].type.name]}
                    padding={"8px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Paragraph
                    >Habilidades</Paragraph>
                </Container>
                <Container
                    padding={"12px"}
                    direction="column"
                    alignItems={"center"}
                >
                    <Container direction="column">


                        {
                            pokemon?.abilities.map((data, key) => (
                                <Container key={key}>
                                    <START color={colorOne} size={"20"} />
                                    <Paragraph className="text-capitalize" weight={"bold"} color="black">
                                        {data.ability.name.replace("-", " ")}
                                    </Paragraph>
                                </Container>
                            ))
                        }
                    </Container>

                </Container>
                <Container
                    className="text-capitalize"
                    background={backgoundColors[pokemon.types[0].type.name]}
                    padding={"8px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Paragraph
                    >Evoluciones</Paragraph>
                </Container>
                {
                    evolution.length > 0 && (
                        <Container padding={"12px"} justifyContent="center" alignItems={"center"} direction="column">
                            <Container alignItems={"center"} justifyContent={"center"}>
                                <Container
                                    width="140px"
                                    height="auto"
                                    justifyContent="center"
                                    alignItems={"center"}
                                >
                                    <Img
                                        width={"100%"}
                                        src={evolution[0]?.image}
                                        alt={evolution[0]?.name}
                                    />
                                    <Paragraph className="text-capitalize" color={"black"}>
                                        {evolution[0]?.name}
                                    </Paragraph>
                                </Container>
                                {
                                    evolution.length > 1 && (
                                        <>
                                            <Container>
                                                <ARROW color={colorOne}
                                                    size={50} />
                                            </Container>
                                            <Container
                                                width="140px"
                                                height="auto"
                                                justifyContent="center"
                                                alignItems={"center"}
                                            >
                                                <Img
                                                    width={"100%"}
                                                    src={evolution[1]?.image}
                                                    alt={evolution[1]?.name}
                                                />
                                                <Paragraph className="text-capitalize" color={"black"}>
                                                    {evolution[1]?.name}
                                                </Paragraph>
                                            </Container>
                                        </>
                                    )
                                }

                            </Container>
                            {
                                evolution.length > 2 && (
                                    <Container alignItems={"center"} justifyContent={"center"}>
                                        <Container
                                            width="140px"
                                            height="auto"
                                            justifyContent="center"
                                            alignItems={"center"}
                                        >
                                            <Img
                                                width={"100%"}
                                                src={evolution[1]?.image}
                                                alt={evolution[1]?.name}
                                            />
                                            <Paragraph className="text-capitalize" color={"black"}>
                                                {evolution[1]?.name}
                                            </Paragraph>
                                        </Container>
                                        <Container>
                                            <ARROW color={colorOne}
                                                size={50} />
                                        </Container>
                                        <Container
                                            width="140px"
                                            height="auto"
                                            justifyContent="center"
                                            alignItems={"center"}
                                        >
                                            <Img
                                                width={"100%"}
                                                src={evolution[2]?.image}
                                                alt={evolution[2]?.name}
                                            />
                                            <Paragraph className="text-capitalize" color={"black"}>
                                                {evolution[2]?.name}
                                            </Paragraph>
                                        </Container>
                                    </Container>
                                )
                            }
                        </Container>
                    )
                }

            </Container>
        </Container>
        
        </motion.div>
    )
}

export default Pokemon
