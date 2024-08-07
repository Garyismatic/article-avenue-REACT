import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./CSS-modules/articleCard.css";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <section className="article-card">
      <Link to={"/articles/" + article.article_id}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={article.article_img_url}
            title={article.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: 16, mt: 1 }}
              color="text.secondary"
            >
              {article.author}
            </Typography>
          </CardContent>
        </Card>
      </Link>
      <section className="card-footer">
        <div>
          <Typography color="text.secondary">{article.topic}</Typography>
          <Typography color="text.secondary">Votes: {article.votes}</Typography>
        </div>
        <div className="card-footer-right">
          <Typography color="text.secondary">
            {article.created_at.slice(0, 10)}
          </Typography>
          <Typography color="text.secondary">
            comments: {article.comment_count}
          </Typography>
        </div>
      </section>
    </section>
  );
}

export default ArticleCard;
