import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import { findPokemons, searchPokemon } from "../redux/actions/pokemonActions";
import { Container } from "../assets/styles/style";

const Search = () => {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if(searchTerm.length < 1){
            dispatch(findPokemons())
        }
    }, [dispatch, searchTerm.length])

    const handleChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchTerm < 1) {
            dispatch(findPokemons())
        } else {
            dispatch(searchPokemon(searchTerm))
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSearch} className="search m-0 d-flex">
                <FormControl
                    type="search"
                    name="search"
                    className="mr-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button className="">
                    SEARCH
                </button>
            </Form>
        </Container>
    );
};

export default Search;