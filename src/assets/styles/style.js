import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: unset;
    padding: unset;
  }
  
  
  `;

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  background-color: ${(props) =>
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

  position: ${(props) => (props.position ? props.position : "unset")};
  top: ${(props) => (props.top ? props.top : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
`;

const SuperContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
        props.background ? props.background : "transparent"};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  margin: ${(props) => (props.margin ? props.margin : "0")}; 
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1366px;
  width: 100%;
  justify-content: ${(props) =>
        props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: wrap;
`;



export {
    Container,
    GlobalStyle,
    SuperContainer,
    Wrapper,
};
