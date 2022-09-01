import React from "react";
import styled, { css } from "styled-components";
import "../App.css";
import RibbonSVG from "../icons/ribbon";
import GoodSVG from "../icons/good";
import Title from "./title";

const CardWrapper = styled.div`
  min-width: 150px;
  min-height: 340px;
  width: 200px;
  height: 350px;
  background: #1f1f1f;
  margin: 0px;
  border-radius: 4px;
  position: relative;
`;
// const Test=styled(RibbonSVG)`
// position:absolute;
// bacground:red;
// top:0;
// width: 100px;
// height: 100px;
// `

const Rate = styled.div`
  display: flex;
  color: #e1e1e1;
  justify-content: end;
  margin: 5px;
`;
const Score = styled.span`
  color: #e1e1e1;
  font-size: ${(props) => props.fs};
  margin-left: ${(props) => props.ml};
  line-height: ${(props) => props.lh};
`;

function Card(props) {
  return (
    <CardWrapper {...props}>
      <img
        src={require("../poster6 1.png")}
        height={"225px"}
        width={"200px"}
      ></img>
      <RibbonSVG class={"ribbonSVG"} />
      <Rate>
        <GoodSVG />
        <Score fs="16px" ml="5px" lh="17px">
          80
        </Score>
        <Score fs="10px">/100</Score>
      </Rate>
      <Title color=" #E1E1E1" margin="0 0 0 10px" fs="20px">Top Gun: Maverick</Title>
      <Title color=" #E1E1E1" margin="0 0 0 10px" fs="15px">(2022)</Title>
    </CardWrapper>
  );
}

export default Card;
