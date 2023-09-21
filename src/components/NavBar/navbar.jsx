import { AppBar, Toolbar, Typography, Button, InputBase } from "@mui/material";
import "./NavBar.css";
const navbar = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Inicio
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Productos
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Tiendas
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Diseñadores
        </Typography>
        <div className="button-search">
          <InputBase
            className="input-base"
            placeholder="Buscar Productos"
            inputProps={{ "aria-label": "search" }}
          />
          <Button variant="outlined" color="inherit" type="submit">
            Buscar
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default navbar;
