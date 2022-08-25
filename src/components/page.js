import React from "react";
import styled, { css } from "styled-components";

const StyledPage = styled.div`
  background: ${(props) => props.background};
  width:100%;
  height:100%;
  margin:0;
  padding:60px;
`;

function Page(props) {
  return <StyledPage {...props}></StyledPage>;
}

export default Page;
