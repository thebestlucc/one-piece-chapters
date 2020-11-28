import styled from "styled-components";
import { px2vw } from "../../helpers/helpers";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  input {
    min-width: 80%;
    border: none;
    border-radius: 10px;
    line-height: 2rem;
    font-family: "ONE PIECE", Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.75em;
    padding: 10px 20px;
    background-color: var(--brown);
    color: var(--yellow);
    &:focus {
    }
  }
`;
