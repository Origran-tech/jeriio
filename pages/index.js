import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import { Add, NextPlanTwoTone } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WarningIcon from "@mui/icons-material/Warning";
import InboxIcon from "@mui/icons-material/Inbox";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  Paper,
  InputBase,
  IconButton,
  AppBar,
  Box,
  Toolbar,
  Typography,
  alpha,
  Menu,
  MenuItem,
  Fab,
} from "@mui/material";
import ContextMenu from "./context-menu/Menu";
import FormNote from "./newnote.js"

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#f5b316",
    },
    secondary: {
      main: "#ff6f59",
    },
    background: {
      default: "#e0e0e2",
    },
    text: {
      primary: "#242331",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#ff8f00",
    },
  },
  typography: {
    fontFamily: "Alef",
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

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

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Vos notes plus facilement avec jeriio"
        />
        <title>Jeriio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ContextMenu />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <EditIcon />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Jeriio
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Rechercher une note"
                  inputProps={{ "aria-label": "rechercher une note" }}
                />
              </Search>
              <p>
                Bienvenue Origran User ! Vous avez actuellement 0 notes, 0 notes
                importantes, 0 notes archivés et 0 notes dans la corbeille.
              </p>
              <Box sx={{ flexGrow: 1 }} />
              <p>Principal</p>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <AssignmentIcon /> Mes notes
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <WarningIcon /> Important
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <InboxIcon /> Archives
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <DeleteIcon /> Corbeille
          </MenuItem>
        </Menu>
        <FormNote/>
        <Fab color="primary" aria-label="add" className="btmr">
          <Add />
        </Fab>
      </ThemeProvider>
    </div>
  );
}
