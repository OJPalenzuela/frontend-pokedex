import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, DELETE, Img, Paragraph, START, typeColors } from "../assets/styles/style";
import { favoriteDelete, favoriteNew } from "../redux/actions/cardActions";
import { setPokemon } from "../redux/actions/pokemonActions";

const Card = ({ pokemon, add }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const handleGoToDetail = () => {
        dispatch(setPokemon(pokemon))
        history.push(`/pokemon/${pokemon.name}`);
    };


    const color = `linear-gradient(to right,
        ${typeColors[pokemon.types[0].type.name]} 50%,
        ${pokemon.types[1] ? typeColors[pokemon.types[1].type.name] : typeColors[pokemon.types[0].type.name]} 50%)`

    return (
        <Container
            width={"140px"}
            height={"auto"}
            background={"#e7e6e6FF"}
            alignItems={"center"}
            justifyContent={"center"}
            padding={"10px"}
            margin={"8px"}
            radius={"5px"}
            shadow={"5px 5px 5px -4px rgba(0,0,0,0.5)"}


        >

            <Container
                className="text-capitalize"
                width={"100%"}
                height={"20px"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                top={"0"}>

                #{pokemon.id}
            </Container>
            <Container
                width={"120px"}
                height={"120px"}
                justifyContent={"center"}
                alignItems={"center"}
                radius={"50%"}
                background={color}
            >

                <Img width={"100%"}
                    height={"100%"}
                    src={pokemon.sprites.front_default} alt="" />
            </Container>
            <Container
                background={"rgba(56, 56, 56, 0.5)"}
                className="text-capitalize"
                width={"100%"}
                height={"20px"}
                justifyContent={"center"}
                alignItems={"center"}
                bottom={"0"}>
                {pokemon.name}
            </Container>
            <Container width="100%" height={"auto"} alignItems="center" justifyContent="space-around">
                {
                    pokemon.types[0] ? (
                        <Container
                            className="text-uppercase"
                            width={"auto"}
                            background={typeColors[pokemon.types[0].type.name]}
                            padding={"4px"}
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
            <Container>
                {
                    auth.isAuthenticated ? (add ? (
                        <Container onClick={() => dispatch(favoriteNew(pokemon))} background={"#ffc107"} padding={"2px"} radius="4px">
                            <START color={"#fff"}
                                size={25} />
                        </Container>
                    ) : (
                        <Container onClick={() => dispatch(favoriteDelete(pokemon.uid))} background={"#ff0f07"} padding={"2px"} radius="4px">
                            <DELETE color={"#fff"}
                                size={25} />
                        </Container>
                    )
                    ) : null
                }

                <Container onClick={() => handleGoToDetail()} background={"#2486be"} padding={"2px"} radius="4px">
                    <Paragraph
                        weight={"bold"}
                        cursor="pointer"
                    >
                        Details
                    </Paragraph>
                </Container>
            </Container>
        </Container>

    );
};

export default Card;
