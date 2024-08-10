import ArticleCard from "./ArticleCard";
import ArticleSortOptions from "./ArticleSortOptions";
import "./CSS-modules/articles.css";
import Topics from "./Topics";
import { useState } from "react";

function Articles({ articles, topic, setTopic, sort, setSort }) {
  const [order, setOrder] = useState("desc");

  return (
    <>
      <Topics
        topic={topic}
        setTopic={setTopic}
        order={order}
        sort={sort}
      />
      <ArticleSortOptions
        topic={topic}
        order={order}
        setOrder={setOrder}
        sort={sort}
        setSort={setSort}
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
