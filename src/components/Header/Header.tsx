import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/mugiwara.svg";
import Banner from "../../assets/imgs/op-banner.svg";
import { Wrapper } from "./styles";

const Header = () => {
  
  return (
    <Wrapper>
      <Link to="/">
        <img className="logo" id="logo" src={Logo} />
      </Link>
      <img className="image" src={Banner} alt="One Piece original logo name" />
    </Wrapper>
  );
};

export default Header;
