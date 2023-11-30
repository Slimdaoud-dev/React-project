// @ts-nocheck
import {
  IconButton,
  Toolbar,
  styled,
  alpha,
  Stack,
  Box,
  useTheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DateTime from "./DateTime";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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

// eslint-disable-next-line react/prop-types
const TopBar = ({ open, handleDrawerOpen, setMode }) => {
  const theme = useTheme();
  return (
    <AppBar position="fixed" 
// @ts-ignore
    open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box flexGrow={1} />

        <Stack direction={"row"}>
          <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
            {theme.palette.mode === "dark" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currenttheme",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
                color="inherit"
              >
                <LightModeOutlined />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currenttheme",
                    theme.palette.mode === "light" ? "dark" : "light"
                  );
                  setMode((prevMode) =>
                    prevMode === "dark" ? "light" : "dark"
                  );
                }}
                color="inherit"
              >
                <DarkModeOutlined />
              </IconButton>
            )}

            <DateTime />
            <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <h4>Admin</h4>
            </div>
          </div>
          
        </Stack>
       
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
