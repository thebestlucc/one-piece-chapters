import styled from "styled-components";
import { px2vw } from "../../helpers/helpers";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: width 0.25s ease-in-out;
  transition: max-width 0.25s ease-in-out;
  transition: display 0.25s ease-in-out;
  .cover {
    grid-area: cover;
    max-width: 300px;
    border: 1px solid #252525;
  }
  .chapter-content {
    text-align: center;
  }
  .chapter {
    grid-area: chapter;
  }
  .title {
    grid-area: title;
  }
  .explanation {
    grid-area: explanation;
  }
  .cover_characters {
    grid-area: cover_characters;
  }
  .characters {
    grid-area: characters;
  }
  .summary {
    grid-area: summary;
    
  }
  .back-btn {
    margin-top: 20px;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
  }
  h3 {
    font-family: "ONE PIECE";
    font-size: 1.75em;
    color: var(--coolRed);
    margin: 5px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
  p {
    font-size: 1.45em;
    font-style: italic;
    color: var(--brown);
  }

  @media (max-width: 739px) {
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    .chapter-content,
    h3 {
      margin-top: 30px;
    }
  }

  @media (min-width: 739px) and (max-width: 980px) {
    max-width: 720px;
    .chapter-content {
      margin: 30px;
    }
    h3 {
      font-size: 1.5em;
    }
  }
`;
