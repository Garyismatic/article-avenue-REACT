import { useEffect, useState } from "react";
import Articles from "./Articles";
import { getArticles } from "../Api";

function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, []);

  return (
    <>
      <Articles articles={articles} />
    </>
  );
}

export default Feed;
