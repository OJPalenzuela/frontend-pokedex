import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { registerEmailPasswordName } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";


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
        <Form onSubmit={formik.handleSubmit} className="form-register">
            <h1 className="h3 mb-3 font-weight-normal">
                ¡Registrate en nuestro sistema!
            </h1>
            <Form.Control
                className="mb-1"
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={formik.handleChange}
            />
            <Form.Control
                className="mb-1"
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={formik.handleChange}
            />
            <Form.Control
                className="mb-1"
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={formik.handleChange}
            />
            <Form.Control
                className="mb-1"
                type="password"
                placeholder="Password"
                name="password2"
                value={password2}
                onChange={formik.handleChange}
            />

            <Button variant="primary" type="submit">
                Registrarse
            </Button>

            <Link className="redirect" to="/auth/login">Iniciar sesión</Link>

        </Form>

    )
}

export default Register
