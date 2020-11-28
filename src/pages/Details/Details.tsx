import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from '../../components/Header/Header';
import Chapter from '../../components/Chapter/Chapter';
import api from '../../service/api';


interface ChapterDetails {
  id?: number;
  title?: string;
  chapter?: string;
  cover_images?: string;
  summary?: string;
  characters?: string;
  cover_characters?: string;
  explanation?: string;
}
const Details = (): JSX.Element => {
  const { id }: { id: string } = useParams();
  const { goBack } = useHistory();
  const [detailedChapter, setDetailedChapter] = useState<ChapterDetails>({});
  
  async function getChapter() {
    const { data } = await api.get(`/${id}`);
    setDetailedChapter(data);
  }
  useEffect(() => {
    getChapter();
  }, [])


  return (
    <>
      <Header />
      <Chapter
        id={Number(id)} 
        chapter={detailedChapter?.chapter}
        characters={detailedChapter?.characters}
        explanation={detailedChapter?.explanation}
        title={detailedChapter?.title}
        cover_images={detailedChapter?.cover_images}
        summary={detailedChapter?.summary}
      />
      <button onClick={() => goBack()}>Voltar</button>
    </>
  );
};

export default Details;
