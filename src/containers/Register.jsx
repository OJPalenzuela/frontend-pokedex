import React from 'react'
import { Form } from 'react-bootstrap';
import { registerEmailPasswordName } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { SuperContainer, Container, Paragraph, Button } from '../assets/styles/style';
import Banner from '../components/Banner';

import { motion } from "framer-motion"
import { animations } from '../assets/animations/animations';




const Register = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password1: "",
            password2: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "El nombre es muy corto")
                .required("Escribe tu nombre"),
            email: Yup.string()
                .email("Email invalido")
                .required("Email requerido"),
            password1: Yup.string()
                .min(8, "La contraseña es muy corta")
                .required("Escribe tu contraseña."),
            password2: Yup.string()
                .oneOf([Yup.ref("password1"), null], "Las contraseñas deben ser iguales")
                .required("Vuelve a escribir tu contraseña."),
        }),
        onSubmit: () => {
            dispatch(registerEmailPasswordName(email, password1, name));
        },
    });

    const {
        name,
        email,
        password1,
        password2,
    } = formik.values;


    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={animations.auth.register.pageVariants}
            transition={animations.auth.pageTransitions}
        >

            <SuperContainer>
                <Container direction="column">
                    <Container margin="22px" padding="16px" background={"#e6e6e6"} direction="column">
                        <Banner site={"Registro"} />

                        <Form onSubmit={formik.handleSubmit}>

                            <Form.Control
                                className="mb-1"
                                type="text"
                                placeholder="Ingresa tu nombre"
                                name="name"
                                value={name}
                                onChange={formik.handleChange}
                            />
                            <Form.Control
                                className="mb-1"
                                type="email"
                                placeholder="Ingresa tu Email"
                                name="email"
                                value={email}
                                onChange={formik.handleChange}
                            />
                            <Form.Control
                                className="mb-1"
                                type="password"
                                placeholder="Elige una contraseña"
                                name="password1"
                                value={password1}
                                onChange={formik.handleChange}
                            />
                            <Form.Control
                                className="mb-1"
                                type="password"
                                placeholder="Verifica tu contraseña"
                                name="password2"
                                value={password2}
                                onChange={formik.handleChange}
                            />
                            <Container margin="8px" width="100%" justifyContent={"center"} alignItems={"center"}>
                                <Button className="btn btn-primary" type="submit">
                                    Registrarse
                                </Button>
                            </Container>
                        </Form>
                        <Container width="100%" justifyContent="center" alignItems="center">
                            <Paragraph color={"black"}>
                                ¿Ya tienes una cuenta? <Link to="/auth/login">Inicia Sesión</Link>
                            </Paragraph>
                        </Container>
                    </Container>


                </Container>
            </SuperContainer >
        </motion.div>
    )
}

export default Register
