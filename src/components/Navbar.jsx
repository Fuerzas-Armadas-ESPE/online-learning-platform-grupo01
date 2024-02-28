import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ boxShadow: "none", backgroundColor: "#ffffff", borderBottom: "1px solid #e0e0e0" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#333" }}>
          Online Learning Platform
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ color: "#333" }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/courses" sx={{ color: "#333" }}>
          Courses
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
