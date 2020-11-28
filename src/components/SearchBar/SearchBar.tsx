import React, { useState, useEffect } from "react";

import { Wrapper } from "./styles";

interface Props {
  searchTerm?: () => void;
  children: React.ReactNode; 
}

const SearchBar = ( props: Props ): JSX.Element => {
  const [state, setState] = useState("");
  
  return (
    <Wrapper>
      { props.children }
    </Wrapper>
  );
};

export default SearchBar;
