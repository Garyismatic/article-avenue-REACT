import ArticleCard from "./ArticleCard";
import ArticleSortOptions from "./ArticleSortOptions";
import './CSS-modules/articles.css'

function Articles({ articles }) {
  return (
    <>
      <ArticleSortOptions />
      <section className="articles">
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
      </section>
    </>
  );
}

export default Articles;
