import React from "react";
import { Container } from "../assets/styles/style";

const Card = ({ pokemon }) => {

    
    
    return (
        <Container width={"140px"} height={"140px"} background={"#888888"} position="relative">
            <Container width={"100%"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                {pokemon.name}
            </Container>
            <Container width={"100%"} height={"20px"} justifyContent={"center"} alignItems={"center"} position={"absolute"} bottom={"0"}>
                NAME
            </Container>
        </Container>
    );
};

export default Card;
