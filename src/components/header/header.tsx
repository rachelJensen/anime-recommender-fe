import styled from "styled-components";
import { SearchInput } from "../search/search-input";
import { NavBar } from "../navigation/navigation";

const HeaderStyles = styled.section`
    width: 100vw;
    height: 22vh;
    background: papayawhip;
`
//TO DO: include navbar, search, and conditionally rendered hamburger menu
export const Header = () => (
  <HeaderStyles >
    <NavBar />
    <SearchInput />
  </HeaderStyles>
)