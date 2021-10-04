import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Container,
    Img,
    Paragraph,
    SuperContainer,
    Wrapper,
} from "../assets/styles/style";
import logo from "../assets/svg/pokeball.svg";
import { startLogout } from "../redux/actions/authActions";
import "../assets/styles/styles.css";

const NavBar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);

    const logoutProfile = () => {
        dispatch(startLogout());
    };

    return (
        <SuperContainer
            height={"48px"}
            background={"#153d5f"}
            padding="0px 10px"
            id="navbar"
        >
            <Wrapper>
                <Container justifyContent="center" alignItems="center">
                    <Link to="/" style={{ "textDecoration": "none" }}>
                        <Container justifyContent="center" alignItems="center">
                            <Img width="32px" height="32px" src={logo} alt="logo" />

                            <Paragraph>Inicio</Paragraph>

                        </Container>
                    </Link>
                </Container>

                <Container>
                    {isAuthenticated ? (
                        <Container justifyContent={"center"}>
                            <ul id="nav-ul">
                                <li>
                                    <Link to="/favorites">Favoritos</Link>
                                </li>
                                <li onClick={() => dispatch(startLogout())}>
                                    <Paragraph>Cerrar sesión</Paragraph>
                                </li>
                            </ul>
                        </Container>
                    ) : (
                        <Container justifyContent={"center"}>
                            <ul id="nav-ul">
                                <li>
                                    <Link to="/auth/login">Iniciar Sesión</Link>
                                </li>
                                <li onClick={() => logoutProfile()}>
                                    <Link to="/auth/register">Registrarme</Link>
                                </li>
                            </ul>
                        </Container>
                    )}
                </Container>
            </Wrapper>
        </SuperContainer>
    );
};

export default NavBar;
