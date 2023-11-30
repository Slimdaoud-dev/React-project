import * as React from "react";
import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { ThemeProvider } from "@emotion/react";
import { getDesignTokens } from "./components/theme";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Container = styled("div")({
  display: "flex",
});

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    localStorage.getItem("currenttheme")
      ? localStorage.getItem("currenttheme")
      : "dark"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        setMode={setMode}
      />
      <Container>
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <DrawerHeader />
          

          <Outlet />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
