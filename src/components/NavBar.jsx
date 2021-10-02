import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Img, SuperContainer, typeColors, Wrapper } from '../assets/styles/style'
import logo from "../assets/svg/pokeball.svg"
import { startLogout } from '../redux/actions/authActions'


const NavBar = () => {
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(state => state.auth)

    const logoutProfile = () => {
        dispatch(startLogout());
    }

    return (
        <SuperContainer background={typeColors.normal} padding="10px 0px">
            <Wrapper padding="10px">
                <Container padding="0px 10px" width="auto">
                    <Img width="32px" height="32px"src={logo} alt="logo" />
                </Container>
                <Container>
                    {
                        isAuthenticated ?
                        (<Container onClick={() => logoutProfile()}>
                            Logout
                        </Container>)
                        :
                        (<Link to={"/auth/login"}>
                            Login
                        </Link>)
                    }
                </Container>
            </Wrapper>
        </SuperContainer>
    )
}

export default NavBar
