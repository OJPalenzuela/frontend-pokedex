import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { favoriteEdit } from '../redux/actions/cardActions';
import { Container, Img } from '../assets/styles/style';

const Edit = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)

  const formik = useFormik({
    initialValues: {
      name: pokemon.name
    },
    onSubmit: () => {
        if(pokemon.uid !== ""){
            dispatch(favoriteEdit(pokemon, name))
        }
    },
  });

  const activeUID = useRef(pokemon.uid)
  const {name} = formik.values

  useEffect(() => {
    if (pokemon.uid !== activeUID.current) {
      formik.resetForm()
    }
    activeUID.current = pokemon.uid
  }, [formik, pokemon])


  return (
    <div className="card container text-center">
      <h2>Edit my Pokemon</h2>
      <form className="card-body " onSubmit={formik.handleSubmit}>
            <Container
                width={"120px"}
                height={"120px"}
                justifyContent={"center"}
                alignItems={"center"}
                radius={"50%"}
            >

                <Img width={"100%"}
                    height={"100%"}
                    src={pokemon.sprites.front_default} alt="" />
            </Container>
        <div className="form-group">
        <label htmlFor="name">
            Name
        </label>
          <input
            type="text"
            name="name"
            className="form-control mt-1"
            placeholder="Name"
            value={name}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  )
}

export default Edit