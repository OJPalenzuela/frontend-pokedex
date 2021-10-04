import styled, { createGlobalStyle } from "styled-components";
import { FaStar, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import "./font.css";


const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: unset;
    padding: unset;
    font-family: 'Montserrat', sans-serif !important;
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
  fighting: 'rgb(192 48 40)',
  default: '#2A1A1F',
  fairy: 'rgb(238 153 172)',
  dark: 'rgb(112, 88, 72)'
};

const backgoundColors = {
  electric: 'rgb(187, 151, 7)',
  normal: 'rgb(112, 112, 72) ',
  fire: 'rgb(171 79 13)',
  water: 'rgb(20, 75, 204)',
  ice: '#rgb(66, 174, 174)',
  rock: 'rgb(121, 106, 37)',
  flying: 'rgb(77, 30, 220)',
  grass: 'rgb(76 140 44)',
  psychic: 'rgb(211, 9, 69)',
  ghost: 'rgb(74, 58, 100)',
  bug: 'rgb(107, 117, 21)',
  poison: 'rgb(106, 42, 106)',
  ground: 'rgb(178, 140, 36)',
  dragon: 'rgb(62, 7, 192)',
  steel: 'rgb(20, 75, 204)',
  fighting: 'rgb(123, 30, 25)',
  default: '#2A1A1F',
  fairy: 'rgb(218, 37, 76)',
  dark: 'rgb(72, 56, 46)'
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

  flex: ${(props) => (props.flex ? props.flex : "none")};
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

  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};

  background: ${(props) => (props.background ? props.background : "transparent")};

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

const ARROW = styled(TiArrowRightThick)`
`;

const BACK = styled(TiArrowLeftThick)`
  cursor: pointer;
`

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: ${(props) => (props.border ? props.border : "1px solid transparent")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.25rem")};
  align-self: center;
  &:disabled {
    background: darkgray;
    cursor: auto;
  }
  & svg {
    margin: 0px 5px;
  }
`;

const Span = styled.span`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  color: ${(props) => (props.color ? props.color : "auto")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
`;


export {
  Container,
  GlobalStyle,
  SuperContainer,
  Wrapper,
  typeColors,
  backgoundColors,
  Img,
  Paragraph,
  START,
  DELETE,
  EDIT,
  ARROW,
  BACK,
  Button,
  Span,
};
