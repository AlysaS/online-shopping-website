import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Avatar,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Badge,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import cartImage from "../../pictures/cartImage.png";
import { CartContext } from "../../state/cart/cart-context";

const productMenu = ["All Products", "Women", "Men"];

export function Header() {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {cartState} = useContext(cartState);
  const badgeCount = cartState.cart.length;

  const handleOpenProductMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //Want a way for the product page to be rendered with specific requirements
  const handleCloseProductMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: 24,
            backgroundColor: "white",
            color: "black",
            px: 3,
          }}
        >
          QuickBuy
        </Typography>
          
   

        <Stack
          direction="row"
          spacing={3}
          sx={{ flexGrow: 1, textAlign: "left" }}
        >
          <Button
            onClick={() => navigate("/products")}
            sx={{
              my: 2,
              color: "white",
              display: "block",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Products
          </Button>

          <Button
            onClick={() => navigate("/orders")}
            sx={{
              my: 2,
              color: "white",
              display: "block",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Past Orders
          </Button>
        </Stack>

        <Box sx={{ px: 4 }}>
          <Badge
            badgeContent={badgeCount}
            overlap="circular"
            sx={{
              "& .MuiBadge-badge": {
                color: "white",
                backgroundColor: "black",
                width: 5,
              },
            }}
          >
            <Avatar
              onClick={() => navigate("/cart")}
              alt="loginLogo"
              src={cartImage}
              sx={{ width: 56, height: 56 }}
            />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
