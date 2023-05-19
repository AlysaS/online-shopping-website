import { useContext, useState } from "react";
import {
  Button,
  Typography,
  Box,
  Rating,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  Card,
  CardContent,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { ProductListContext } from "../../state/productList/productList-context";
import { CartContext } from "../../state/cart/cart-context";
import { cartActions } from "../../state/cart/cart-reducer";

export function ProductPage() {
  const { id } = useParams();
  const { cartState, cartDispatch } = useContext(CartContext);
  const { productListState, productListDispatch } =
    useContext(ProductListContext);
  const product = productListState.productList.find((x) => x.id == id);

  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const addToCart = () => {
    
    cartDispatch({
      type: cartActions.ADD,
      product:
        product.size == "" ? product : { ...product, size: size },
      qty: qty,
    });


    console.log("cart: ");
    console.log(cartState.cart);
  };

  const sizeSelectChange = (event) => {
    setSize(event.target.value);
  };

  const qtySelectChange = (event) => {
    setQty(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          width: "75%",
          textAlign: "center",
          margin: "auto",
          paddingTop: 5,
          paddingBottom: 2,
        }}
      >
        {product.title}
      </Typography>

      <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
        <Rating
          name="simple-controlled"
          value={product.rating.rate}
          size="medium"
          readOnly
          /** onChange={(event, newValue) => {setValue(newValue)}*/
        />
        <Typography>({product.rating.count})</Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        spacing={1}
        sx={{ paddingTop: 5 }}
      >
        <Box
          component="img"
          src={product.image}
          sx={{
            width: 350,
            height: 500,
            objectFit: "contain",
            paddingLeft: 20,
          }}
        />

        <Stack>
          {/**Want to have a view more option instead fo the scroll */}
          <Card sx={{ border: 1, width: 450, height: 230, paddingBottom: 3 }}>
            <CardContent>
              <Typography sx={{ padding: 1, fontWeight: "bold", fontSize: 18 }}>
                Product Information:{" "}
              </Typography>
              <Typography
                sx={{
                  width: 390,
                  height: 155,
                  mx: 2,
                  paddingBottom: 1,
                  overflow: "auto",
                }}
              >
                {product.description}
              </Typography>{" "}
            </CardContent>
          </Card>

          <Typography variant="h5" sx={{ textAlign: "center", padding: 2 }}>
            Price:{" "}
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
          </Typography>

          {product.sizes != null && (
            <Stack
              direction="row"
              sx={{
                mx: "auto",
                width: 200,
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 2,
              }}
            >
              <Typography sx={{ paddingRight: 2, fontSize: 19 }}>
                {" "}
                Size:{" "}
              </Typography>
              <Select
                defaultValue="Select Size"
                sx={{
                  mx: "auto",
                  width: 200,
                }}
                onChange={sizeSelectChange}
              >
                <MenuItem
                  disabled
                  value="Select Size"
                  sx={{ fontWeight: "bold" }}
                >
                  Select Size
                </MenuItem>
                <MenuItem value={"small"} disabled= {product.sizes.find(x => x.name == "small").amount <= 0}>Small</MenuItem>
                <MenuItem value={"medium"} disabled= {product.sizes.find(x => x.name == "medium").amount <= 0}>Medium</MenuItem>
                <MenuItem value={"large"} disabled= {product.sizes.find(x => x.name == "large").amount <= 0}>Large</MenuItem>
                <MenuItem value={"xlarge"} disabled= {product.sizes.find(x => x.name == "xlarge").amount <= 0}>XLarge</MenuItem>
                */
              </Select>
            </Stack>
          )}

          <Stack
            direction="row"
            sx={{
              mx: "auto",
              width: 200,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 2,
            }}
          >
            <Typography sx={{ paddingRight: 2, fontSize: 19 }}>
              Qty:{" "}
            </Typography>
            <Select
              defaultValue={1}
              size="small"
              sx={{ width: 75 }}
              onChange={qtySelectChange}
            >
              <MenuItem value={1} disabled={(product.sizes != null && size !="")? (product.sizes.find(x => x.name === size).amount < 1): false }>1</MenuItem>
              <MenuItem value={2} disabled={(product.sizes != null && size !="") ? (product.sizes.find(x => x.name === size).amount < 2): false }>2</MenuItem>
              <MenuItem value={3} disabled={(product.sizes != null && size !="")? (product.sizes.find(x => x.name === size).amount < 3): false }>3</MenuItem>
              <MenuItem value={4} disabled={(product.sizes != null && size !="") ? (product.sizes.find(x => x.name === size).amount < 4): false }>4</MenuItem>
              <MenuItem value={5} disabled={(product.sizes != null && size !="") ? (product.sizes.find(x => x.name === size).amount < 5): false }>5</MenuItem>
              
            </Select>
          </Stack>

          <Button
            variant="contained"
            sx={{ width: 250, mx: "auto", my: 2 }}
            disabled={product.sizes != null && size == ""}
            onClick={() => addToCart()}
          >
            Add To Cart
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
