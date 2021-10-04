import React from 'react'
import { Container, Img, Paragraph } from '../assets/styles/style'

import logo from "../assets/svg/pokedex.svg"


const Banner = ({site = ""}) => {
    return (
        <Container width="100%" justifyContent="center" alignItems="center" margin={"16px 0px"}>
                        <Container>
                            <Container justifyContent="center" alignItems="center">
                                <Img src={logo} width="140px" />
                            </Container>
                            <Container
                            justifyContent="center" alignItems="center"
                            left="-40px"
                            position="relative"
                            direction={"column"}
                            >

                                <Paragraph
                                    color={"black"}
                                    size={"60px"}
                                    weight={"bold"}
                                >
                                    Pokédex
                                </Paragraph>
                                <Paragraph
                                    color={"black"}
                                    size={"32px"}
                                    weight={"bold"}
                                >
                                    {site}
                                </Paragraph>
                            </Container>
                        </Container>
                    </Container>
    )
}

export default Banner
