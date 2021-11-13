import styled from "styled-components";

export const Section = styled.section`
  width: 1200px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 4em;

  div {
    text-align: center;

    h1 {
      margin-bottom: 1em;
    }
    
    p {
      margin-bottom: 3em;
      color: gray;
    }

    span {
      background-color: #222;
      padding: 0 0.2em;
      color: #96E1FF;
    }
  }

  img {
    width: 50%;
  }
`;