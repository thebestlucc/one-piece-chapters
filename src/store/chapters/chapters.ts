import { Action, bindActionCreators } from "redux";
import Constants from "../../helpers/constants";
import { StateList } from "../../helpers/types/types";

const INITIAL_CHAPTERS_lIST_STATE: StateList["chaptersList"] = {
  data: [],
  filteredChapters: [],
  loading: false,
};

const INITIAL_SINGLE_CHAPTER_STATE: StateList["uniqueChapter"] = {
  id: 0,
  title: "",
  chapter: "",
  characters: "",
  cover_characters: "",
  cover_images: "",
  explanation: "",
  publish: "",
};

const INITIAL_STATE_FILTERED_CHAPTERS: StateList["chaptersList"][] = [];

const INITIAL_PAGINATE_STATE: StateList["paginate"] = {
  totalPages: 0,
  page: 0,
  offset: 0,
  data: [],
};

interface chaptersListAction extends Action {
  type: string;
  payload: StateList["chaptersList"];
}

interface singleChapterAction extends Action {
  type: string;
  payload: StateList["uniqueChapter"];
}
interface loadingStateAction extends Action {
  type: string;
  payload: boolean;
}

export const chaptersList = (
  state: StateList["chaptersList"] = INITIAL_CHAPTERS_lIST_STATE,
  action: chaptersListAction
) => {
  switch (action.type) {
    case Constants.CHAPTER.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Constants.CHAPTER.FETCH_ALL:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case Constants.CHAPTER.FILTER:
      return {
        ...state,
        data: state?.data.filter((e) =>
          String(e.id).includes(String(action.payload))
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export const singleChapter = (
  state: StateList["uniqueChapter"] = INITIAL_SINGLE_CHAPTER_STATE,
  action: singleChapterAction
) => {
  switch (action.type) {
    case Constants.CHAPTER.FETCH_CHAPTER:
      return action.payload;
    default:
      return state;
  }
};

export default {
  chaptersList,
  singleChapter,
};
