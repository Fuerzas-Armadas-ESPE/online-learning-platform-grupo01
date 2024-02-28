import { AppBar, Toolbar, Typography } from "@mui/material";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <AppBar position="static">
      <Navbar />
    </AppBar>
  );
};

export default Header;
