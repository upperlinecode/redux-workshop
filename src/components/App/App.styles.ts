import styled from "styled-components";

export const AppRoot = styled.div`
  & {
    font-family: Helvetica, sans-serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5%;
    margin: 20px 4%;
  }
  & img {
    width: 100%;
    height: 30vh;
    border: 4px solid cyan;
    overflow: hidden;
  }
`;
