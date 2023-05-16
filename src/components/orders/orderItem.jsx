import { TypeSpecimenOutlined } from "@mui/icons-material";
import { CardMedia, Card, Stack, CardContent, Typography } from "@mui/material";

export const OrderItem = (props) => {
  const { item } = props;

  return (
    <Card variant="outlined" sx={{ border: 1, width: 300,margin:2 }}>
      <Stack direction="row">
        <CardMedia
          component="img"
          image={item.image}
          title="item image"
          sx={{ height: 150, width: 100, objectFit: "contain" }}
        />
        <CardContent>
          
          {item.size != null && <Typography>size: {item.size}</Typography>}
{/*<Typography>{item.title}</Typography>*/}
          <Typography>Qty: {item.qty} </Typography>

          <Typography variant="h6">
            Price:{" "}
            {(item.price * item.qty).toLocaleString("en-US", {
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
