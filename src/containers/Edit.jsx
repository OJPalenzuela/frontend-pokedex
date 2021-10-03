import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import { favoriteEdit } from '../redux/actions/cardActions';
import { Container, Img, Wrapper } from '../assets/styles/style';

const Edit = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)

  const formik = useFormik({
    initialValues: {
      name: pokemon.name
    },
    onSubmit: () => {
      if (pokemon.uid !== "") {
        dispatch(favoriteEdit(pokemon, name))
      }
    },
  });

  const activeUID = useRef(pokemon.uid)
  const { name } = formik.values

  useEffect(() => {
    if (pokemon.uid !== activeUID.current) {
      formik.resetForm()
    }
    activeUID.current = pokemon.uid
  }, [formik, pokemon])


  return (
    <Container
    height={"100%"}
    >
      <Wrapper>
        <Container
          direction="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          padding="32px"
        >
          <Container
            width="40%"
            minWidth="400px"
            maxWidth="600px"
          >
            <Container className="card container"
              direction="column"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              <h2>Edit my Pokemon</h2>
              <form className="card-body " onSubmit={formik.handleSubmit}>
                <Container
                  direction="column"
                  width="100%"
                  justifyContent="center"
                  alignItems="center"
                >
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
                  <Container className="form-group">
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
                  </Container>
                  <button type="submit" className="btn btn-primary mt-2">
                    Save
                  </button>
                </Container>

              </form>
            </Container>
          </Container>

        </Container>
      </Wrapper>
    </Container>
  )
}

export default Edit