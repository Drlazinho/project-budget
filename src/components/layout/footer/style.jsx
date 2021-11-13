import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #222;
  color: white;
  padding: 3em;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  li {
    font-size: 1.5em;
    margin: 0 1em;
    margin-bottom: 2em;
  }

  li:hover{
    color: #96E1FF;
    cursor: pointer;
  }

  span {
    font-weight: bold;
    color: #96E1FF;
  }
`;