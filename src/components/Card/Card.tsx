import React, { useState } from "react";
import { Wrapper } from "./styles";
import imgTest from "../../assets/imgs/luffy-not-found2.svg";
import { Chapter } from "../../helpers/types/types";
import { Link } from "react-router-dom";

const Card = (props: Chapter): JSX.Element => {
  const { id, title, chapter } = props;

  return (
    <>
      <Wrapper>
        <img className="imgCover" src={imgTest} />
        <div className="cardContent">
          <h2>{chapter}</h2>
          <p>{title}</p>
          <Link to={`/chapter/${id}`}>Show More</Link>
        </div>
      </Wrapper>
    </>
  );
};

export default Card;
