import { IconButton, Typography, styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import BarChartIcon from "@mui/icons-material/BarChart";
import MuiDrawer from "@mui/material/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CallEndIcon from "@mui/icons-material/CallEnd";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import React from "react";
import PieChartIcon from "@mui/icons-material/PieChart";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import TimelineIcon from "@mui/icons-material/Timeline";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [venteClicked, setventeClicked] = React.useState(false);
  const [achatClicked, setachatClicked] = React.useState(false);
  const [stockClicked, setstockClicked] = React.useState(false);
  const [financeClicked, setfinanceClicked] = React.useState(false);

  return (
    <div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {open ? (
          <>
            {" "}
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{
                mx: "auto",
                width: 88,
                height: 88,
                my: 1,
                transition: "4s",
              }}
            />
            <Typography
              align="center"
              sx={{ fontSize: open ? 17 : 0, transition: "4s" }}
            >
              Admin
            </Typography>
          </>
        ) : (
          <></>
        )}

        <Divider />

        <div>
          <List style={{ marginTop: 25 }}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate("/")}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>

              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              
                onClick={() => {
                  setventeClicked(!venteClicked);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Vente" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

              {venteClicked ? (
                <ListItem disablePadding sx={{ display: "block" }}>
                  {/* Élément 1 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Fichevente")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Fiche vente"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>

                  {/* Élément 2 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Devis")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Devis"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>

                  {/* Élément 3 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Bondecommande")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bon de commande"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                  {/* Élément 4 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Bondelivraison")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bon de Livraison"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                  {/* Élément 5 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Facture")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Facture"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>

                  {/* Élément 6 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Avoirclient")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Avoir Client"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>

                  {/* Élément 7 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Bonderetour")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bon de retour"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ) : (
                <></>
              )}

              {/*-----------------------------------------------------------Achat------------------------------------------------------------------------*/}

              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => {
                  setachatClicked(!achatClicked);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Achat" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

              {achatClicked ? (
                <ListItem disablePadding sx={{ display: "block" }}>
                  {/* Élément 1 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Fichedefournisseur")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Fiche de fournisseur"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>

                  {/* Élément 2 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Facturedefournisseur")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Facture de fournisseur"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                  {/* Élément 3 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/BLfournisseur")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="BL fournisseur"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ) : (
                <></>
              )}

              {/*-----------------------------------------------------------Stock------------------------------------------------------------------------*/}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => setstockClicked(!stockClicked)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Inventory2Icon />
                </ListItemIcon>
                <ListItemText primary="Stock" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

              {stockClicked ? (
                <ListItem disablePadding sx={{ display: "block" }}>
                  {/* Élément 1 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Fichedearticle")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Fiche de Article"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>

                  {/* Élément 2 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Bondentree")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bon d'entrée"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                  {/* Élément 3 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 3 : 0,
                    }}
                    onClick={() => navigate("/Bondesortie")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Bon de sortie"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ) : (
                <></>
              )}

              {/*-----------------------------------------------------------Finance------------------------------------------------------------------------*/}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => setfinanceClicked(!financeClicked)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Finance"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>

              {financeClicked ? (
                <ListItem disablePadding sx={{ display: "block" }}>
                  {/* Élément 1 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 2 : 0,
                    }}
                    onClick={() => navigate("/Reglementclient")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Reglement client"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>

                  {/* Élément 2 */}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      ml: open ? 2 : 0,
                    }}
                    onClick={() => navigate("/Reglementfournisseur")}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Reglement fournisseur"
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ) : (
                <></>
              )}
              {/*-------------------------------------------tel------------------------------------*/}
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <CallEndIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Téléphonie"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate("/Pie")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PieChartIcon />
              </ListItemIcon>
              <ListItemText primary="Pie" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate("/Bar")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Bar" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate("/Line")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LineAxisIcon />
              </ListItemIcon>
              <ListItemText primary="Line" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate("/Bump")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Bump" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </List>
        </div>
        <Divider />
      </Drawer>
    </div>
  );
};

export default SideBar;
