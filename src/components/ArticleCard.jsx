import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function ArticleCard({ article }) {
  return (
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
  );
}

export default ArticleCard;
