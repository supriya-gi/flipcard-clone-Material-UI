import React from "react";
import "./header.css";
import { ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssistantIcon from "@mui/icons-material/Assistant";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
function Login() {
  return (
    <div style={{ color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssistantIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Flipkart Plus Zone" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddTaskIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Orders" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FavoriteIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Wishlist" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ViewStreamIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Rewards" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <CardGiftcardIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Gift Cards" />
        <Divider />
      </ListItemButton>
    </div>
  );
}

export default Login;
