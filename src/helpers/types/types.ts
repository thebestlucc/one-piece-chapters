export interface Chapter {
  id?: number;
  chapter?: string;
  title?: string;
}

export interface DetailedChapter {
    id: number;
    title: string;
    chapter: string;
    characters?: string;
    cover_characters?: string;
    cover_images?: string;
    explanation?: string;
    publish?: string;
    summary?: string;
}

export interface Paginate {
  totalPages: number;
  offset: number;
  page: number;
  data: DetailedChapter[];
}

export interface ChaptersList {
  data: DetailedChapter[];
  filteredChapters: DetailedChapter[];
  loading: boolean;
}

export interface StateList {
  chaptersList?: ChaptersList;
  uniqueChapter?: DetailedChapter;
  paginate?: Paginate;
}
