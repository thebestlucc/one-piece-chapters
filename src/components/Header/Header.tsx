import React from "react";
import Logo from "../../assets/imgs/mugiwara.svg";
import Banner from "../../assets/imgs/op-banner.svg";
import { Wrapper } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <img className="logo" src={Logo} />
      <img className="image" src={Banner} alt="One Piece original logo name" />
    </Wrapper>
  );
};

export default Header;
