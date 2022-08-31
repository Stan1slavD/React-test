import React from 'react'
import styled, {css} from 'styled-components';
import "../App.css"
import RibbonSVG from '../icons/ribbon';
import GoodSVG from '../icons/good';

const CardWrapper=styled.div`
min-width:150px;
min-height:340px;
width:200px;
height:350px;
background:#1F1F1F;
margin:0px;
border-radius:4px;
position:relative;
`
// const Test=styled(RibbonSVG)`
// position:absolute;
// bacground:red;
// top:0;
// width: 100px; 
// height: 100px;
// `

const Rate=styled.div`
display:flex;
color:#E1E1E1;
justify-content:end;
margin:5px;
`
const Score=styled.span`
color:#E1E1E1;
font-size:${props=>props.fs};
margin-left:${props=>props.ml};
line-height:${props=>props.lh};
`

function Card(props) {
    return ( 
        <CardWrapper {...props}>
             <img
              src={require("../poster6 1.png")}
              height={"225px"}
              width={"200px"}
            ></img>
            <RibbonSVG class={"ribbonSVG"}/>   
            <Rate>
            <GoodSVG/>
            <Score fs="16px" ml="5px" lh="17px">80</Score>
            <Score fs="10px">/100</Score>
            </Rate>
        </CardWrapper>
     );
}

export default Card;