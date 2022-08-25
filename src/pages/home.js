import React from "react";
import styled from "styled-components";
import Span from "../components/span";
import Title from "../components/title";
import Page from "../components/page"
import RibbonSVG from "../icons/ribbon";
import CheckedSVG from "../icons/checked";
function Home() {
  return (
    <Page background="#191919">
    <Title
      color="#E1E1E1"
      border="1px solid #A41B1B"
      background="#2d2d2d"
      padding="20px"
      borderRadius="8px"
    >
     <p>Welcome to <Span color="#F33F3F">Watchlists</Span></p> 
     <p>Browse movies, add them to watchlists and share them with friends.</p>
     <p>Just click the <RibbonSVG/> to add a movie, the poster to see more details or <CheckedSVG/> to mark the movie as watched.</p>
    </Title>
    </Page>
  );
}

export default Home;
