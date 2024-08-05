import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import './CSS-modules/articleCard.css'

function ArticleCard({ article }) {
  return (
    <section className="article-card">
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
      </CardContent>
    </Card>
    </section>
  );
}

export default ArticleCard;
