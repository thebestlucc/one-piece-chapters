import React from "react";
import { useHistory } from "react-router-dom";
import { DetailedChapter } from "../../helpers/types/types";
import { Wrapper } from "./styles";
import { FiArrowLeftCircle } from "react-icons/fi";
import CoverNotFound from "../../assets/imgs/luffy-not-found2.svg";

const Chapter = (props: DetailedChapter): JSX.Element => {
  const {
    chapter,
    characters,
    title,
    cover_characters,
    cover_images,
    explanation,
    summary,
  } = props;
  const { goBack } = useHistory();
  const coverImages = cover_images?.split("|");

  return (
    <Wrapper>
      <img
        className="cover"
        src={coverImages?.[0] ? coverImages?.[0] : CoverNotFound}
        alt="Chapter Cover"
      />
      <div className="chapter-content">
        <div className="chapter">
          <h3>{chapter ? chapter : "Not available."}</h3>
        </div>
        <div className="characters">
          <h3>characters: </h3>
          <p>{characters ? characters : "Not available."}</p>
        </div>
        <div className="title">
          <h3>title: </h3>
          <p>{title ? title : "Not available."}</p>
        </div>
        <div className="cover_characters">
          <h3>cover_characters: </h3>
          <p>{cover_characters ? cover_characters : "Not available."}</p>
        </div>
        <div className="explanation">
          <h3>explanation: </h3>
          <p>{explanation ? explanation : "Not available."}</p>
        </div>
        <div className="summary">
          <h3>summary: </h3>
          <p>{summary ? summary : "Not available."}</p>
        </div>
        <button className="back-btn">
          <FiArrowLeftCircle
            onClick={() => goBack()}
            size={55}
            color="#0b3075"
          />
        </button>
      </div>
    </Wrapper>
  );
};

export default Chapter;
