import Constants from "../helpers/constants";
import { DetailedChapter } from "../helpers/types/types";

interface Chapter {
  id: number | undefined;
  chapter: string | undefined;
  title: string | undefined;
}

type AddAction = { type: string; payload: Chapter[] };
type FetchAction = { type: string; payload: DetailedChapter };
type FilterAction = { type: string; payload: String };
type LoadingAction = { type: string; payload: boolean };

export const fetchAllChapters = (chapter: Chapter[]): AddAction => ({
  type: Constants.CHAPTER.FETCH_ALL,
  payload: chapter,
});

export const fetchChapter = (chapter: DetailedChapter): FetchAction => ({
  type: Constants.CHAPTER.FETCH_CHAPTER,
  payload: chapter,
});
export const filterChapter = (chapter: string): FilterAction => ({
  type: Constants.CHAPTER.FILTER,
  payload: chapter,
});

export const loadingChapters = (loading: boolean): LoadingAction => ({
  type: Constants.CHAPTER.LOADING,
  payload: loading,
});

export default {
  fetchAllChapters,
  fetchChapter,
  filterChapter,
  loadingChapters
};
