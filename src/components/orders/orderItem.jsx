import { TypeSpecimenOutlined } from "@mui/icons-material";
import { CardMedia, Card, Stack, CardContent, Typography } from "@mui/material";

export const OrderItem = (props) => {
  const { item } = props;

  return (
    <Card
      variant="outlined"
      sx={{ border: 1, width: 300, margin: 2, height: 160 }}
    >
      <Stack direction="row">
        <CardMedia
          component="img"
          image={item.image}
          title="item image"
          sx={{ height: 150, width: 100, objectFit: "contain" }}
        />
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }}>
            {item.title.length > 40
              ? `${item.title.substring(0, 35)}...`
              : item.title}
          </Typography>

          {item.size != "" && <Typography>size: {item.size}</Typography>}

          <Typography>Qty: {item.cartQty} </Typography>

          <Typography sx={{ fontSize: 17 }}>
            Price:{" "}
            {(item.price * item.cartQty).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};
