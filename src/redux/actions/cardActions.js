import { db } from "../../firebase/firebaseConfig";
import { loadFavorites } from "../../services/favorites";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const favoriteNew = (favorite) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        Swal.fire({
            position: 'center',
            text: 'Añadido a Favoritos',
            icon: 'success',
            title: favorite.name,
            showConfirmButton: false,
            timer: 1000
        })
        await db.collection(`${uid}/pokemon/favorite`).add(favorite)
        
        dispatch(listFavorite(uid))
    }
}

export const favoriteDelete = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        Swal.fire({
            position: 'center',
            title: 'Se ha eliminado correctamente',
            icon: 'success',
            showConfirmButton: true
        })
        await db.doc(`${uid}/pokemon/favorite/${id}`).delete();
        dispatch(listFavorite(uid))
    }
}

export const favoriteEdit = (pokemon, name) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newPokemon = {
            ...pokemon,
            "name": name
        }

        const cardFire = { ...newPokemon}
        delete cardFire.uid

        Swal.fire({
            position: 'center',
            text: 'Se ha editado correctamente',
            icon: 'success',
            title: name,
            showConfirmButton: false,
            timer: 1000
        })

        await db.doc(`${uid}/pokemon/favorite/${pokemon.uid}`).update(newPokemon)
        

        dispatch(listFavorite(uid))

    }
}

export const listFavorite = (uid) => {
    return async (dispatch) => {
        const list = await loadFavorites(uid);
        dispatch(setFavorite(list))
    }
}

export const setFavorite = (list) => {
    return {
        type: types.addFavorite,
        payload: list
    }
}