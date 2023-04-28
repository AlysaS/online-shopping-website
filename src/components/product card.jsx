import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Stack,
} from "@mui/material";
import * as React from "react";

export const ProductCard = (props) => {
  const { product } = props;

  return (
    <Card sx={{ width: 285, height: 360, border: 0.5 }}>
      <CardMedia
        sx={{ height: 190, objectFit: "contain", py: 1 }}
        component="img"
        image={product.image}
        title="product image"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center", fontSize: 18 }}
        >
          {product.title}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
          <Rating
            name="simple-controlled"
            value={product.rating.rate}
            size="small"
            readOnly
            /** onChange={(event, newValue) => {setValue(newValue)}*/
          />
          <Typography>({product.rating.count})</Typography>
        </Stack>
        <Typography sx={{ textAlign: "center", fontSize: 17 }}>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};
