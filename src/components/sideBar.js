import { Button, Row, Col, Stack } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { hover } from "@testing-library/user-event/dist/hover";
import "../App.css";

const LogoText = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 44px;
  color: #f33f3f;
  margin-top:19px;
`;

const CreateWLButton = styled.button`
  background: #f33f3f;
  border-radius: 6px;
  border: none;
  width: 230px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top:20px;
`;
const GuestButton = styled.button`
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  background: inherit;
  color: #e1e1e1;
  width: 230px;
  padding-top: 10px;
  padding-bottom: 10px;
  position:absolute;
  bottom:30px;
`;

const linkStyle = {
  textDecoration: "none",
  width: "230px",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
  padingLeft: "12px",
  paddingTop: "10px",
  paddingBottom: "10px",
};

const Search = styled.div`
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 6px;
  background: inherit;
  color: rgba(217, 217, 217, 0.3);
  padding: 7px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 230px;
  margin-top:20px;
  padding-left:12px
`;

const SearchField = styled.input`
  background: inherit;
  color: inherit;
  outline: 0;
  outline-offset: 0;
  border: 0;
  margin-left: 17px;
`;

const SideBarContainer = styled.div`
  height: 100vh;
  min-height:500px;
  min-width:250px;
  background: #000000;
  position:relative;
`;


function SideBar() {
  return (
    <>
      <SideBarContainer>
        <Stack style={{width:"230px",  marginLeft: "auto",
        marginRight: "auto"}}>
          <LogoText>Watchlists</LogoText>
          <Search>
            <img
              src={require("../search(2).png")}
              height={"21px"}
              width={"21px"}
            ></img>
            <SearchField type={"search"} placeholder={"Search"}></SearchField>
          </Search>
          <Link to="/" className="menuLink homeLink" style={linkStyle}>
            {" "}
            <img
              src={require("../Home(1).png")}
              height={"18px"}
              width={"20.8px"}
              className="imgMenu"
            ></img>
            <a style={{verticalAlign:'middle'}}>
            Home
              </a>
          </Link>
          <Link to="/history" className="menuLink historyLink" style={linkStyle}>
            {" "}
            <img
              src={require("../history.png")}
              height={"18px"}
              width={"20.8px"}
              className="imgMenu"
            ></img>
            <a style={{verticalAlign:'middle'}}>
            History
            </a>
          </Link>
          <CreateWLButton>+ Create watchlist</CreateWLButton>
          <hr className="hr"/>
          <p>My List</p>
          <GuestButton>GUEST ...</GuestButton>
        </Stack>
      </SideBarContainer>
    </>
  );
}

export default SideBar;
