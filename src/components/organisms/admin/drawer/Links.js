import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PeopleIcon from "@material-ui/icons/People";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

//TODO: Revoir la maniere de mettre le style sur les Link

export const Dashboard = (
  <Link
    to="/administration/dashboard"
    style={{ textDecoration: "none", color: "black" }}
  >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="DashBoard" />
    </ListItem>
  </Link>
);

export const Product = (
  <Link
    to="/administration/products"
    style={{ textDecoration: "none", color: "black" }}
  >
    <ListItem button>
      <ListItemIcon>
        <PhotoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
  </Link>
);

export const Order = (
  <Link
    to="/administration/orders"
    style={{ textDecoration: "none", color: "black" }}
  >
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
  </Link>
);

export const Customer = (
  <Link
    to="/administration/customers"
    style={{ textDecoration: "none", color: "black" }}
  >
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
  </Link>
);

export const Setting = (
  <Link
    to="/administration/settings"
    style={{ textDecoration: "none", color: "black" }}
  >
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </Link>
);

export const Logout = (
  <Link
    to="/administration/logout"
    style={{ textDecoration: "none", color: "black" }}
  >
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
  </Link>
);
