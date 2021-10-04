import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { backgoundColors, Container, DELETE, EDIT, Img, Paragraph, START, typeColors } from "../assets/styles/style";
import { typesPokemon } from "../helpers/diccionario";
import { favoriteDelete, favoriteNew } from "../redux/actions/cardActions";
import { setPokemon } from "../redux/actions/pokemonActions";

const Card = ({ pokemon, add }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const handleGoToDetail = () => {
        handlePokemon()
        history.push(`/pokemon/${pokemon.name}`);
    };

    const handleGoToEdit = () => {
        handlePokemon()
        history.push(`/edit/${pokemon.uid}`);
    };

    const handlePokemon = () => {
        dispatch(setPokemon(pokemon))
    }


    const color = `linear-gradient(to right,
        ${typeColors[pokemon.types[0].type.name]} 50%,
        ${pokemon.types[1] ? typeColors[pokemon.types[1].type.name] : typeColors[pokemon.types[0].type.name]} 50%)`

    return (
        <Container
            width={"140px"}
            height={"auto"}
            background={"#e4e4e4"}
            alignItems={"center"}
            justifyContent={"center"}
            padding={"10px"}
            margin={"8px"}
            radius={"6px"}
            shadow={"5px 5px 5px -4px rgba(0,0,0,0.5)"}
        >
            <Container
                className="text-capitalize"
                width={"100%"}
                height={"30px"}
                justifyContent={"flex-end"}
                alignItems={"center"}
            >
                <Container
                    background={backgoundColors[pokemon.types[0].type.name]}
                    className="text-capitalize"
                    flex={"1"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    padding={"2px"}
                    height={"100%"}
                    radius={"6px 0px 0px 0px"}
                >
                    <Paragraph size={"12px"} weight={"bold"}>
                        {pokemon.name}
                    </Paragraph>
                </Container>
                <Container
                    background={typeColors[pokemon.types[0].type.name]}
                    padding={"2px"}
                    radius={"0px 6px 0px 0px"}
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Paragraph color="black" size="12px">
                        #{pokemon.id}
                    </Paragraph>
                </Container>
            </Container>
            <Container
                width={"120px"}
                justifyContent={"center"}
                alignItems={"center"}
                background={color}
            >

                <Img
                    width={"100%"}
                    src={pokemon.sprites.front_default} alt=""
                />
            </Container>
            <Container width="100%" height={"auto"} alignItems="center" justifyContent="center">
                {
                    pokemon.types[0] ? (
                        <Container
                            className="text-uppercase"
                            width={"auto"}
                            background={typeColors[pokemon.types[0].type.name]}
                            padding={"2px"}
                            flex={"1"}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            <Paragraph
                                color={"white"}
                                weight={"bold"}
                                size={"11px"}
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
                            padding={"2px"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            flex={"1"}
                        >
                            <Paragraph
                                color={"white"}
                                weight={"bold"}
                                size={"11px"}
                            >
                                {typesPokemon[pokemon.types[1].type.name]}
                            </Paragraph>
                        </Container>
                    ) : null
                }
            </Container>
            <Container margin={"4px 0"} width="100%">
                <Container className="btn btn-primary" alignItems={"center"}
                    justifyContent={"center"} flex={"1"} onClick={() => handleGoToDetail()} background={"#2486be"} padding={"2px"} >
                    <Paragraph
                        weight={"bold"}
                        cursor="pointer"
                    >
                        Detalles
                    </Paragraph>
                </Container>
                {
                    auth.isAuthenticated ? (add ? (

                        <Container className="btn btn-warning" onClick={() => dispatch(favoriteNew(pokemon))} background={"#ffc107"} padding={"2px"} >
                            <START color={"#fff"}
                                size={25} />
                        </Container>

                    ) : (
                        <Container
                        alignItems={"center"}
                    justifyContent={"center"}
                    width={"100%"}
                        >
                            <Container className="btn btn-danger" alignItems={"center"}
                    justifyContent={"center"} flex={1} onClick={() => dispatch(favoriteDelete(pokemon.uid))} background={"#ff0f07"} padding={"2px"}>
                                <DELETE color={"#fff"}
                                    size={25} />
                            </Container>
                            <Container className="btn btn-success" alignItems={"center"}
                    justifyContent={"center"} flex={1} onClick={() => handleGoToEdit()} background={"#3c9401"} padding={"2px"}>
                                <EDIT color={"#fff"}
                                    size={25} />
                            </Container>
                        </Container>
                    )
                    ) : null
                }


            </Container>
        </Container>

    );
};

export default Card;
