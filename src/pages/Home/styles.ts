import styled from "styled-components";

export const Grid = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-template-rows: repeat(auto-fit, minmax(150px, auto));
  gap: 2rem;
`;
