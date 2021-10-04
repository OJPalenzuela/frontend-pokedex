import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginFacebook, loginGoogle } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';
import { loginEmailPassword } from '../redux/actions/authActions';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { SuperContainer, Container, Button, Span, Paragraph } from '../assets/styles/style';
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import Banner from '../components/Banner';

import { motion } from "framer-motion"
import { animations } from '../assets/animations/animations';

const Login = () => {

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email requerido"),
      password: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .required("Escribe tu contraseña."),
    }),
    onSubmit: () => {
      dispatch(loginEmailPassword(email, password))
    },
  });

  const { email, password } = formik.values;


  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  }

  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  }
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={animations.auth.login.pageVariants}
      transition={animations.auth.pageTransitions}
    >
      <SuperContainer>
        <Container direction="column">
          <Container margin="22px" padding="16px" background={"#e6e6e6"} direction="column">
            <Banner site={"Iniciar Sesión"} />

            <Form onSubmit={formik.handleSubmit}>

              <Form.Control
                className="mb-1"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={formik.handleChange} />
              <Form.Control
                className="mb-1"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={formik.handleChange} />
              <Container width="100%" justifyContent={"center"} alignItems={"center"}>
                <Button className="btn btn-primary" type="submit">
                Iniciar Sesión
                </Button>
              </Container>
            </Form>
            <Container margin={"16px 0px"} direction="column">
              <Button
                margin={"0 0 1rem 0"}
                fontSize={"0.9rem"}
                padding={"12px 6px"}
                border={"none"}
                borderRadius={"7px"}
                width={"100%"}
                background={"#FFFFFF"}
                color={"#212121"}
                onClick={handleLoginGoogle}
              >
                <FcGoogle />
                <Span margin={"0 1rem"}>Inicia con Google</Span>
              </Button>

              <Button
                margin={"0 0 1rem 0"}
                fontSize={"0.9rem"}
                padding={"12px 6px"}
                border={"none"}
                borderRadius={"7px"}
                width={"100%"}
                background={"#3B5998"}
                color={"#FFFFFF"}
                onClick={handleLoginFacebook}
              >
                <GrFacebookOption />
                <Span margin={"0 1rem"}>Inicia con Facebook</Span>
              </Button>
            </Container>
            <Container width="100%" justifyContent="center" alignItems="center">
              <Paragraph color={"black"}>
                ¿No tienes una cuenta? <Link to="/auth/register">Registrate</Link>
              </Paragraph>
            </Container>
          </Container>


        </Container>
      </SuperContainer >
    </motion.div>
  )
}

export default Login
