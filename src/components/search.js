import React from "react";
import styled, { css } from "styled-components";
import SearchSVG from "../icons/search";
import "../App.css";
import Title from "./title";
import Button from "./buttons";

const StyledSearchBar = styled.div`
  background: #191919;
  width: 100%;
  height: 45px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid rgba(217, 217, 217, 0.3);
  border-radius: 6px;
  display: flex;
`;


const StyledSearchField = styled.input`
  width: 90%;
  border: none;
  background: inherit;
  outline: 0;
  outline-offset: 0;
  margin-left: 17px;
  margin-right: 17px;
  color: #e1e1e1;
  margin-top: 13px;
  margin-bottom: 13px;
`;

function SearchBar(props) {
  return (
    <StyledSearchBar {...props}>
      <div className="svg">
        <SearchSVG></SearchSVG>
      </div>
      <StyledSearchField placeholder="Search  for movies by title"></StyledSearchField>
      <Button color="" border="none" bc="#F33F3F" br="6px">
        Search
      </Button>
    </StyledSearchBar>
  );
}

export default SearchBar;
