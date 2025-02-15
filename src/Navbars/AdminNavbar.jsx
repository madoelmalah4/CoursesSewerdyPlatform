import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  People,
  Settings,
  Menu,
} from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 220;
const menuItems = [
  { text: "Orders", icon: <Dashboard />, path: "/orders" },
  { text: "Courses", icon: <GroupIcon />, path: "/courses" },
  { text: "Students", icon: <GroupIcon />, path: "/students" },

  //   { text: "Users", icon: <People /> },
  //   { text: "Settings", icon: <Settings /> },
];

const AdminNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const [isClicked, setIsClicked] = useState("Orders");
  const navigate = useNavigate();

  const handelListItemsClick = (text, path) => {
    setIsClicked(text);
    navigate(path);
  };

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: "#121212",
        color: "#fff",
        height: "100vh",
        p: 2,
      }}
    >
      <Typography variant="h6" fontWeight="bold" textAlign="center" mb={2}>
        Admin Dashboard
      </Typography>
      <List>
        {menuItems.map(({ text, icon, path }, index) => (
          <Tooltip key={text} title={text} placement="right" arrow>
            <ListItem
              button
              sx={{
                color: "#ccc",
                backgroundColor: isClicked == text && "#1e1e1e",
              }}
              onClick={() => handelListItemsClick(text, path)}
            >
              <ListItemIcon sx={{ color: "#ccc" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {isMobile && (
        <AppBar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "#1e1e1e",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          sx={{ display: { xs: "none", sm: "block" } }}
          open
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default AdminNavbar;
