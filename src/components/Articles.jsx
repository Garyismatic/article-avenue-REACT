import ArticleCard from "./ArticleCard";
import ArticleSortOptions from "./ArticleSortOptions";
import "./CSS-modules/articles.css";
import Topics from "./Topics";
import { useState } from "react";

function Articles({ articles, topic, setTopic }) {
  const [sortBy, setSortBy] = useState("Date");
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("desc");
  return (
    <>
      <Topics
        topic={topic}
        setTopic={setTopic}
        setOrder={setOrder}
        setSort={setSort}
        setSortBy={setSortBy}
      />
      <ArticleSortOptions
        topic={topic}
        order={order}
        setOrder={setOrder}
        sort={sort}
        setSort={setSort}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <section className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
    </>
  );
}

export default Articles;
