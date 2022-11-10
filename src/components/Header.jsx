import { AppBar, Toolbar, Typography } from "@mui/material";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import AddBoxIcon from "@mui/icons-material/AddBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MovingIcon from "@mui/icons-material/Moving";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha, useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../img/logo3.jpg";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Login from "../components/Login";
import More from "./More";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import img1 from "../img/f15c02bfeb02d15d.webp";
import img2 from "../img/29327f40e9c4d26b.webp";
import img3 from "../img/22fddf3c7da4c4f4.webp";
import img4 from "../img/c12afc017e6f24cb.webp";
import img5 from "../img/69c6589653afdb9a.webp";
import img6 from "../img/ab7e2b022a4587dd.webp";
import img7 from "../img/0ff199d1bd27eb98.webp";
import img8 from "../img/71050627a56b4693.webp";
import img9 from "../img/dff3f7adcf3a90c6.webp";
import img10 from "../img/05d708653beff580.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { display } from "@mui/system";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemData = [
    {
      img: img1,
      title: "Top Offers",
    },
    {
      img: img2,
      title: "Grocery",
    },
    {
      img: img3,
      title: "Mobiles",
    },
    {
      img: img4,
      title: "Fashion",
    },
    {
      img: img5,
      title: "Electronics",
    },
    {
      img: img6,
      title: "Home",
    },
    {
      img: img7,
      title: "Appliances",
    },
    {
      img: img8,
      title: "Travel",
    },
    {
      img: img9,
      title: "Beauty, Toys & More",
    },
    {
      img: img10,
      title: "2-Wheelers",
    },
  ];
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <PersonIcon /> Login & SignUp
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MovingIcon />
                  SuperCoin Zone
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <StarPurple500Icon />
                  Flipkard Plus Zone
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <DashboardIcon />
                  All Categories
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div></div>
          )}

          <Box
            component="img"
            className="logo"
            alt="Your logo."
            src={logo}
            sx={{ marginLeft: { xs: 0, sm: 1, md: 10 } }}
          />
          <AddBoxIcon
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              marginLeft: { xs: 7, sm: 7 },
            }}
          />
          <Search
            style={{ backgroundColor: "white" }}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#1976d2" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              style={{ color: "gray", width: "350px" }}
            />
          </Search>
          <ShoppingCartIcon
            sx={{ ml: 2, display: { xs: "block", sm: "none", md: "none" } }}
          />
          <Tippy content={<Login />} interactive={true}>
            <Button
              sx={{ marginLeft: { xs: 2, sm: 2, md: 0 } }}
              variant="contained"
              style={{ backgroundColor: "white", color: "#1976d2" }}
            >
              <b>Login</b>
            </Button>
          </Tippy>
          <Typography
            sx={{ ml: 6, display: { xs: "none", sm: "block", md: "block" } }}
          >
            <b>Become a Seller</b>
          </Typography>
          <Tippy content={<More />} interactive={true}>
            <Typography
              sx={{ ml: 6, display: { xs: "none", sm: "block", md: "block" } }}
            >
              <b>More</b>
            </Typography>
          </Tippy>
          <KeyboardArrowDownIcon
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          />

          <ShoppingCartIcon
            sx={{ ml: 7, display: { xs: "none", sm: "block", md: "block" } }}
          />
          <Typography
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            Card
          </Typography>
        </Toolbar>
        <Search
          style={{ backgroundColor: "white" }}
          sx={{
            display: { xs: "block", sm: "none", md: "none" },
            margin: { xs: 2, sm: "none", md: "none" },
            width: { xs: 300, sm: "none", md: "none" },
          }}
        >
          <SearchIconWrapper>
            <SearchIcon style={{ color: "#1976d2" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            style={{ color: "gray" }}
          />
        </Search>
      </AppBar>

      <ImageList cols={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ width: "100%", height: "100px" }}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
export default Header;
