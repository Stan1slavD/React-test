import React from "react";
import styled, { css } from "styled-components";

const StyledSpan = styled.span`
  color: ${(props) => props.color};
`;

function Span(props) {
  return <StyledSpan {...props}></StyledSpan>;
}

export default Span;
