import React from "react";
import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.color};
  border: ${(props) => props.border || "none"};
  border-color: ${(borderColor) => borderColor};
  padding: ${(padding) => padding || "0"};
  border-radius: ${(borderRadius) => borderRadius || "0"};
  margin: ${(props) => props.margin || "0"};
  font-size:${(props) => props.fs};
  
  ${(props) =>
    props.primary &&
    css`
      background: black;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: red;
    `};
`;

const largeTitle = styled(StyledTitle)`
  font-size: 50px;
`;

function Title(props) {
  return <StyledTitle {...props}></StyledTitle>;
}

export default Title;
