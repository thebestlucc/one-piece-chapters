import React, { useState } from "react";
import { Wrapper } from "./styles";
import { Chapter } from "../../helpers/types/types";
import { Link } from "react-router-dom";
import api from "../../service/api";
import { useEffect } from "react";
import CoverNotFound from '../../assets/imgs/luffy-not-found.svg';

const Card = (props: Chapter): JSX.Element => {
  const { id, title, chapter } = props;
  // const [coverImg, setCoverImg] = useState("");

  // async function getCoverImg(id) {
  //   const { data } = await api.get(`/${id}`);
  //   const { cover_images } = data;
  //   setCoverImg(cover_images?.split("|")?.[0]);
  // }

  // useEffect(() => {
  //  getCoverImg(id);
  // }, [])
  return (
    <>
      <Wrapper>
        <img className="imgCover" src={CoverNotFound} />
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
