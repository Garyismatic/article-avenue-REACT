import ArticleCard from "./ArticleCard";
import ArticleSortOptions from "./ArticleSortOptions";
import "./CSS-modules/articles.css";
import Topics from "./Topics";

function Articles({ articles, topic, setTopic }) {
  return (
    <>
      <Topics topic={topic} setTopic={setTopic} />
      <ArticleSortOptions topic={topic}/>
      <section className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </section>
    </>
  );
}

export default Articles;
