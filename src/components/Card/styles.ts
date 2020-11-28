import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 300px;
  border: 1px solid currentColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--straw);

  .imgCover {
    max-width: 100px;
    margin: 0 20px;
  }
  
  .cardContent {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0;
  }

  .cardContent h2{
    text-align: center;
    font-size: 1.125em;
    font-family: 'ONE PIECE';
    text-transform: uppercase;
    letter-spacing: .27em;
  }

  .cardContent p {
    margin: 10px 0;
    max-width: 300px;
    font-size: 1.125em;
    line-height: 1em;
    font-style: italic;
  }

  .cardContent a {
    cursor: pointer;
    text-decoration: none;
    color: white;
    background: #252525;
    padding: 6px 10px;
    font-size: .875em;
    font-size: 1.125em;
    line-height: 1em;
    font-style: italic;
    transition: background .35s ease-out;
  }
  .cardContent a:hover {
    color: #252525;
    background: var(--straw);
    font-family: 'ONE PIECE';
    font-size: 1.125em;
    letter-spacing: .1em;
    
  }
`;
