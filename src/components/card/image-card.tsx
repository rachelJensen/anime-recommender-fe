import {Card, CardActionArea, CardMedia } from '@mui/material';

export const ImageCard = () => {
  return (
  <Card sx={{ maxWidth: 345 }} >
    <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="green iguana"
        />
    </CardActionArea>
  </Card>)
}