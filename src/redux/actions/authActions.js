import { types } from "../types/types";
import { facebook, firebase, google } from '../../firebase/firebaseConfig';
import Swal from "sweetalert2";


export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
                console.log('El usuario no existe');
            })
    }
}


export const registerEmailPasswordName = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
                Swal.fire({
                    position: 'center',
                    text: 'Usuario Creado',
                    icon: 'success',
                    title: user.displayName,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e,
                    footer: ''
                })
            })
    }
}


export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebook)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout());
    }
}


export const logout = () => ({
    type: types.logout
})