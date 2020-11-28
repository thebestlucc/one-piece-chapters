import React from "react";
import {splitCoverUrl} from '../../helpers/helpers';
import { DetailedChapter } from "../../helpers/types/types";
import {Wrapper} from './styles'

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

  const coverImages = cover_images?.split("|");
  console.log(coverImages);
  return (
    <Wrapper>
      <img className="cover" src={coverImages[1]} alt="Image Cover" />
      <ul>
        <li>chapter: {chapter}</li>
        <li>characters: {characters}</li>
        <li>title: {title}</li>
        <li>cover_characters: {cover_characters}</li>
        <li>cover_images: {cover_images}</li>
        <li>explanation: {explanation}</li>
        <li>summary: {summary}</li>
      </ul>
    </Wrapper>
  );
};

export default Chapter;
