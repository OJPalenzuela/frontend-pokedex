import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginFacebook, loginGoogle } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';
import { loginEmailPassword } from '../redux/actions/authActions';
import { useFormik } from 'formik';
import * as Yup from "yup";

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
    <div className="superLogin">
      <div className="login-div">
        <Form onSubmit={formik.handleSubmit} className="form-login">
          <h1 className="h4 mb-3 font-weight-normal">
            Inicio de sesión
          </h1>
          <Form.Control
            className="mb-1"
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={formik.handleChange} />

          <Form.Control
            className="mb-1"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={formik.handleChange} />

          <Button variant="primary" type="submit">
            Enviar
          </Button>


        </Form>

        <div className="auth">
          <Button
            variant="primary" className="google-btn"
            onClick={handleLoginGoogle}>
            <div className="google-icon-wrapper d-flex align-items-center justify-content-center">
              <img className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button" />

              <p className="btn-text m-1">
                <b>Sign in with google</b>
              </p>
            </div>
          </Button>

          <Button
            variant="primary" className="google-btn"
            onClick={handleLoginFacebook}>
            <div className="google-icon-wrapper d-flex align-items-center justify-content-center">
              <img className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png"
                alt="google button"
                width="30px" />

              <p className="btn-text m-1">
                <b>Sign in with Facebook</b>
              </p>
            </div>
          </Button>
        </div>

        <Link className="redirect" to="/auth/register">Registrate</Link>
      </div>
    </div>
  )
}

export default Login
