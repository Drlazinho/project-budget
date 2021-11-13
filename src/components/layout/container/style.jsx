import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  min-height: 75%;
  /* min-height: ${props => props.customClass ? "75%" : "100%"}; */

  .start {
    justify-content: flex-start;
  }

  .column{
    flex-direction: column;
    justify-content: flex-start;
  }
`