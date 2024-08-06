import { CardContent, CardMedia, Card, Typography } from "@mui/material";
import "./CSS-modules/articleByIdHeader.css";

function ArticleByIdHeader(props) {
  const { article } = props;

  return (
    <>
      <div className="article-header">
        <Card sx={{ m: 0.2, maxWidth: 600 }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {article.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.topic}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={article.article_img_url}
            title={article.title}
          />
        </Card>
      </div>
    </>
  );
}

export default ArticleByIdHeader;
