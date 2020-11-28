import { Chapter } from "./types/types";

function splitCoverUrl(cover_images: string, splitter: string): string[]  {
  return cover_images.split(splitter);
}

const px2vw = (size: number, width: number = 1440): string => `${(size / width) * 100}vw`;

export {
  splitCoverUrl,
  px2vw
}