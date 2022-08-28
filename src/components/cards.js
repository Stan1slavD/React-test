import React from 'react'
import styled, {css} from 'styled-components';

const StyledCardContainer=styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
`

function CardContainer(props) {
    return ( 
        <StyledCardContainer {...props}>
        </StyledCardContainer>
     );
}

export default CardContainer;