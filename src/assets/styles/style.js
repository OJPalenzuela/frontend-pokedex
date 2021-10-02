import styled, { createGlobalStyle } from "styled-components";
import { FaStar, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: unset;
    padding: unset;
  }
  
  #root{
    height: 100%;
  }
  `;

const typeColors = {
  electric: '#F8D030',
  normal: '#E0C068 ',
  fire: '#F08030',
  water: '#6890F0',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#A890F0',
  grass: '#78C850',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A8B820',
  poison: '#A040A0',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  color: ${(props) => (props.color ? props.color : "black")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "unset")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "unset")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "unset")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "unset")};
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  filter: ${(props) => (props.filter ? props.filter : "unset")};

  flex: ${(props) => (props.flex ? props.flex : "unset")};
`;

const SuperContainer = styled.div`
  display: flex;
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  margin: ${(props) => (props.margin ? props.margin : "0")};

  min-height: ${(props) => (props.minHeight ? props.minHeight : "unset")};
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1366px;
  width: 100%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: wrap;
`;

const Img = styled.img`
  width:${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`

const Paragraph = styled.p`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  margin: ${(props) => (props.margin ? props.margin : "0")};

  cursor: ${(props) => (props.cursor ? props.cursor : "unset")};
`

const START = styled(FaStar)`
  cursor: pointer;
  transition: color 200ms;
`;
const DELETE = styled(AiFillDelete)`
  cursor: pointer;
  transition: color 200ms;
`;

const EDIT = styled(FaEdit)`
  cursor: pointer;
  transition: color 200ms;
`;

export {
  Container,
  GlobalStyle,
  SuperContainer,
  Wrapper,
  typeColors,
  Img,
  Paragraph,
  START,
  DELETE,
  EDIT,
};
