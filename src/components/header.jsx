import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  Tooltip,
  Button,
  Tab,
  Tabs,
  Avatar,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import cartImage from "../pictures/cartImage.png";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
  {name: "Orders", path: "/orders"}
];

const productMenu = ["All Products", "Women", "Men"]


export function Header() {
  const navigate = useNavigate();


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 
  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page) {
      navigate(page.path);
    }
  };



  const navToPage = (page) =>{
    const currPage = (pages.find((p) => p.name === page));
    console.log(currPage)
    navigate(currPage.path);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            onClick={() => navToPage("Home")}
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: 24,
              backgroundColor:"white",
              color:"black",
              px: 3
            }}
          >
            Buy In Bulk
          </Typography>


          <Box sx={{flexGrow:1, textAlign: "center"}} >
          <Button onClick={handleOpenUserMenu} sx={{ my: 2, color: "white", display: "block", fontSize:17, fontWeight:"bold"}}>
                Products
              </Button>
          <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {productMenu.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Button
                onClick={() => navToPage("Orders")}
                sx={{ my: 2, color: "white", display: "block", fontSize:17, fontWeight:"bold"}}
              >Past Orders</Button>
             

<Box sx={{px:4}}>
  <Avatar  onClick ={() => {navToPage("Cart")}} alt="loginLogo" src ={cartImage} sx={{ width: 56, height: 56}} />
</Box>
          
             

          
      </Toolbar>
    </AppBar>
  );
}