import React from 'react'
import styled, {css} from 'styled-components';

const StyledWrapper=styled.div`
display:flex;

`

function Wrapper(props) {
    return ( 
        <StyledWrapper {...props}></StyledWrapper>
     );
    }
export default Wrapper;