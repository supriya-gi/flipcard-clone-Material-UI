import React from "react";
import { Divider } from "@mui/material";
import { ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import GetAppIcon from "@mui/icons-material/GetApp";
import MovingIcon from "@mui/icons-material/Moving";

function More() {
  return (
    <div style={{ color: "black" }}>
      <ListItemButton>
        <ListItemIcon>
          <NotificationsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Notification Preferences" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LiveHelpIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="24*7 Customer care" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MovingIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Advertise" />
        <Divider />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GetAppIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Download App" />
        <Divider />
      </ListItemButton>
    </div>
  );
}

export default More;
