import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import chapterActions from "../../actions/chapterActions";

//components
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotFound from "../../components/NotFound/NotFound";
import api from "../../service/api";
import { StateList } from "../../helpers/types/types";

import Card from "../../components/Card/Card";
import { Grid } from "./styles";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounce] = useDebounce(searchTerm, 1000);
  const [found, setFound] = useState(false);
  const [chapters, setChapters] = useState<StateList["uniqueChapter"][]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const dispatch = useDispatch();
  const chaptersList = useSelector(
    (state: StateList) => state.chaptersList?.data
  );
  const filteredChapters = useSelector(
    (state: StateList) => state.chaptersList?.filteredChapters
  );

  const loading = useSelector(
    (state: StateList) => state?.chaptersList?.loading
  );

  async function getData() {
    if (!searchTerm) {
      try {
        const response = await api.get("/all");
        const { items } = response.data;
        const reorderedArray = items.reverse();
        dispatch(chapterActions.fetchAllChapters(reorderedArray));
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = await api.get(`/${searchTerm}`);
        const { data } = response;
        return data ? setFound(true) : setFound(false);
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    setChapters(chaptersList);
  }, [chaptersList]);

  useEffect(() => {
    getData();
  }, [debounce]);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setSearchTerm(value);
    dispatch(chapterActions.loadingChapters(true));
    setChapters(chaptersList.filter((e) => String(e.id).includes(value)));
    dispatch(chapterActions.loadingChapters(false));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemsPerPage]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setItemsPerPage(itemsPerPage + 4);
  }
  return (
    <>
      <Header />
      <SearchBar>
        <input
          value={searchTerm}
          type="text"
          name="inputSearch"
          id="inputSearch"
          placeholder="Please type a chapter number"
          onChange={handleSearch}
        />
      </SearchBar>
      <Grid>
        {!loading
          ? chapters?.slice(0, itemsPerPage)?.map(({ id, title, chapter }) => {
              return <Card key={id} id={id} title={title} chapter={chapter} />;
            })
          : "Loading"}
      </Grid>
    </>
  );
};

export default Home;
