import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 1em;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  ul li{
    margin-right: 1em;
    transition: color 1s;
  }
  ul li a{
    transition: color .3s;
  }

  ul li a:hover{
    color: #96E1FF;
    cursor: pointer;
  }


`;