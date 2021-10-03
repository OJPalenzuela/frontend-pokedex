import { db } from '../firebase/firebaseConfig'

const loadFavorites = async (uid) => {
    const favoriteStore = await db.collection(`${uid}/pokemon/favorite`).get()
    const favoriteList = []

    favoriteStore.forEach(data => {
        favoriteList.push({ uid: data.id, ...data.data() })
    })

    return favoriteList
}

export { loadFavorites }