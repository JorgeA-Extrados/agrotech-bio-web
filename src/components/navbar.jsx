import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:600px)");

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElProducts, setAnchorElProducts] = useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = useState(null);

  const handleOpenProductsMenu = (event) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseProductsMenu = () => {
    setAnchorElProducts(null);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };

  const handleNavigateProductsMenu = (producto) => {
    if (producto === "biorhiza") {
      navigate("/biorhiza-endo");
      setAnchorElProducts(null);
    }
    if (producto === "promotor") {
      navigate("/promotor-plus");
      setAnchorElProducts(null);
    }
    if (producto === "amin") {
      navigate("/amin-gpb");
      setAnchorElProducts(null);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHome = () => {
    navigate("/");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorElLanguage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (anchorElProducts) {
        handleCloseProductsMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [anchorElProducts]);

  const handleNavigateToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300); // Espera a que el home cargue antes de hacer scroll
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="static" className="nav-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={handleHome}
            component="img"
            src="/static/NUEVO_LOGO.png"
            alt="Logo"
            sx={{
              height: "5.5rem",
              width: "auto",
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
          />

          {/* Icono con menu desplegable en mobile */}
          <Box
            onClick={handleHome}
            component="img"
            src="/static/NUEVO_LOGO.png"
            alt="Logo"
            sx={{
              mt: 2,
              height: { xs: "5.5rem" }, // Ajusta la altura según el tamaño de pantalla
              maxWidth: { xs: "10rem" },
              mr: 20,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
            }}
          />

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#598428"
            >
              <MenuIcon sx={{ fontSize: 40, marginTop: "1.5rem" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={() => handleNavigateToSection("descripcion")}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#598428",
                    fontSize: "1.5rem",
                  }}
                >
                  {t("nav.nosotros")}
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={handleOpenProductsMenu}
                aria-controls="products-menu"
                aria-haspopup="true"
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#598428",
                    fontSize: "1.5rem",
                  }}
                >
                  {t("nav.productos")}
                </Typography>
              </MenuItem>
              <Menu
                id="products-menu"
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={handleCloseProductsMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={() => handleNavigateProductsMenu("promotor")}
                >
                  <Typography>{t("nav.promotor")}</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => handleNavigateProductsMenu("biorhiza")}
                >
                  <Typography>{t("nav.biorhiza")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleNavigateProductsMenu("amin")}>
                  <Typography>{t("nav.amin")}</Typography>
                </MenuItem>
              </Menu>
              <MenuItem
                onClick={handleOpenLanguageMenu}
                aria-controls="language-menu"
                aria-haspopup="true"
              >
                <TranslateIcon sx={{ color: "#598428" }} />
              </MenuItem>
              <Menu
                id="language-menu"
                anchorEl={anchorElLanguage}
                open={Boolean(anchorElLanguage)}
                onClose={handleCloseLanguageMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={() => changeLanguage("es")}>
                  <Typography color="#598428">{t("nav.es")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("pt")}>
                  <Typography color="#598428">{t("nav.pt")}</Typography>
                </MenuItem>
              </Menu>
              <MenuItem onClick={() => handleNavigateToSection("contacto")}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#598428",
                    fontSize: "1.5rem",
                  }}
                >
                  {t("nav.contacto")}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Menu web */}
          <Box
            sx={{
              flexGrow: isMobile ? 0 : 1,
            }}
          />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              className="nav-bar-btn"
              onClick={() => handleNavigateToSection("descripcion")}
            >
              {t("nav.nosotros")}
            </Button>
            <Button
              className="nav-bar-btn"
              onClick={handleOpenProductsMenu}
              aria-controls="products-menu"
              aria-haspopup="true"
            >
              {t("nav.productos")}
            </Button>
            <Menu
              id="products-menu"
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleCloseProductsMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={() => handleNavigateProductsMenu("promotor")}>
                <Typography color="#598428">{t("nav.promotor")}</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigateProductsMenu("biorhiza")}>
                <Typography color="#598428">{t("nav.biorhiza")}</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigateProductsMenu("amin")}>
                <Typography color="#598428">{t("nav.amin")}</Typography>
              </MenuItem>
            </Menu>
            <Button
              className="nav-bar-btn"
              onClick={() => handleNavigateToSection("contacto")}
            >
              {t("nav.contacto")}
            </Button>
            <Button
              className="nav-bar-btn"
              onClick={handleOpenLanguageMenu}
              aria-controls="language-menu"
              aria-haspopup="true"
            >
              <TranslateIcon />
            </Button>
            <Menu
              id="language-menu"
              anchorEl={anchorElLanguage}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseLanguageMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={() => changeLanguage("es")}>
                <Typography color="#598428">{t("nav.es")}</Typography>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("pt")}>
                <Typography color="#598428">{t("nav.pt")}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
