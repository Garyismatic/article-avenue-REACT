import './CSS-modules/articleByIdContent.css'

function ArticleByIdContent(props) {
  const { article } = props;

  return (
    <>
      <section className="article-content">
        <h2 className='article-title'>{article.title}</h2>
        <p className='article-body'>{article.body}</p>
      </section>
    </>
  );
}

export default ArticleByIdContent;
