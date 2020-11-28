import styled from "styled-components";
import { px2vw } from "../../helpers/helpers";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--darknessBlue);
  /* width: 100vw; */
  padding: 10px;
  -webkit-box-shadow: 0px 10px 23px -4px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 0px 10px 23px -4px rgba(0, 0, 0, 0.53);
  box-shadow: 0px 10px 23px -4px rgba(0, 0, 0, 0.53);
  transition: max-width 0.5s linear;

  .logo {
    max-width: ${px2vw(150)};
    min-width: 150px;
  }

  .image {
    max-width: ${px2vw(300)};
    min-width: 300px;
  }

  @media (max-width: 739px) {
    .logo {
      display: none;
    }
    .image {
      max-width: ${px2vw(600)};
    }
  }

  @media (min-width: 739px) and (max-width: 980px) {
    .logo {
      max-width: ${px2vw(200)};
    }

    .image {
      max-width: ${px2vw(300)};
    }
  }
`;
