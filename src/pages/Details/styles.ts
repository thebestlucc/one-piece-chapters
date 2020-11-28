import styled from "styled-components";
import { px2vw } from '../../helpers/helpers';

export const Wrapper = styled.div`
  max-width: 960px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 30px auto 0 auto;
  max-width: 980px;
  padding: 20px;
  background: var(--softBlue);
  -webkit-box-shadow: 0px 10px 23px -4px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 0px 10px 23px -4px rgba(0, 0, 0, 0.53);
  box-shadow: 0px 10px 23px -4px rgba(0, 0, 0, 0.53);
`;
