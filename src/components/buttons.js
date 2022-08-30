import React from "react";
import styled, { css } from "styled-components";


const StyledButton = styled.button`
  width:100px;
  height:45px;
  border: 0px;
  border-radius:${props=>props.br};
  background-color:${props=>props.bc};
  margin-right:-1px;
  margin-top:-1px;
`;

function Button(props) {
  return <StyledButton {...props}></StyledButton>;
}

export default Button;
