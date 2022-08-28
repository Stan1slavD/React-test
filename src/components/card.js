import React from 'react'
import styled, {css} from 'styled-components';

const StyledCard=styled.div`
width:500px;
height:100px;
background:blue;
margin:10px;
`

function Card(props) {
    return ( 
        <StyledCard {...props}>

        </StyledCard>
     );
}

export default Card;