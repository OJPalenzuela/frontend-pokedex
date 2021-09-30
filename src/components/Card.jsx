import React from "react";
import { Container, typeColors } from "../assets/styles/style";

const Card = ({ pokemon }) => {
    
    const color = `linear-gradient(to right,
        ${typeColors[pokemon.types[0].type.name]} 50%,
        ${pokemon.types[1] ? typeColors[pokemon.types[1].type.name] : typeColors[pokemon.types[0].type.name]} 50%)`

    return (
        <Container width={"140px"} height={"140px"} backgroundLinear={color} position="relative"
            
        >
            <Container width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                <img src={pokemon.sprites.front_default} alt="" />
            </Container>
            <Container className="text-capitalize" width={"100%"} height={"20px"} justifyContent={"center"} alignItems={"center"} position={"absolute"} bottom={"0"}>
                {pokemon.name}
            </Container>
        </Container>
    );
};

export default Card;
