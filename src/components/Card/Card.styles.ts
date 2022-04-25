import styled from "styled-components";

export const CardRoot = styled.article<{ isActive: boolean }>`
  display: flex;
  font-family: Helvetica, sans-serif;
  margin: 12px;

  ${(props) => (props.isActive ? "box-shadow: 0px 0px 24px blue;" : "")}
`;
