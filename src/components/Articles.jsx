import ArticleCard from "./ArticleCard";
import ArticleSortOptions from "./ArticleSortOptions";

function Articles({ articles }) {
  return (
    <>
      <ArticleSortOptions />

      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id}/>;
      })}
    </>
  );
}

export default Articles;
