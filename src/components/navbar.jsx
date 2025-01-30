import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorElLanguage(null);
  };

  return (
    // <AppBar position="fixed" sx={{ background: "#fff", marginBottom: "6rem",  boxShadow: "none", }}>
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <img
    //         src="/static/logo-agro.png"
    //         alt="Logo"
    //         style={{ display: "flex", marginLeft: "125px", width: 'auto' }}
    //       />

    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
    //       <Box
    //         sx={{
    //           flexGrow: 1,
    //           display: "flex",
    //           justifyContent: "flex-end",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Button
    //           //onClick={handleLogin}
    //           sx={{
    //             my: 2,
    //             //color: "white",
    //             display: "block",
    //             color: "#000",
    //             "&:hover": { backgroundColor: "transparent" },
    //           }}
    //         >
    //           INICIAR SESIÓN
    //         </Button>
    //         <Button
    //           //onClick={handleSignup}
    //           sx={{
    //             my: 2,
    //             //color: "white",
    //             display: "block",
    //             color: "#000",
    //             "&:hover": { backgroundColor: "transparent" },
    //           }}
    //         >
    //           REGISTRARSE
    //         </Button>

    //         {/* <Tooltip title="">
    //         {!isMobile ? (
    //           <>
    //             <Button
    //               onClick={handleHome}
    //               sx={{
    //                 my: 2,
    //                 color: "white",
    //                 display: "block",
    //                 color: "#000",
    //                 "&:hover": { backgroundColor: "transparent" },
    //               }}
    //             >
    //               Home
    //             </Button>
    //             <Button
    //               onClick={handleFreePyme}
    //               sx={{
    //                 my: 2,
    //                 color: "white",
    //                 display: "block",
    //                 color: "#000",
    //                 "&:hover": { backgroundColor: "transparent" },
    //               }}
    //             >
    //               {isPyme ? "Servicios solicitados" : "Mis proyectos"}
    //             </Button>
    //           </>
    //         ) : (
    //           <Box sx={{ display: "flex", flexDirection: "row" }}>
    //             <Menu
    //               id="menu-appbar"
    //               anchorEl={anchorElNav}
    //               anchorOrigin={{
    //                 vertical: "bottom",
    //                 horizontal: "left",
    //               }}
    //               keepMounted
    //               transformOrigin={{
    //                 vertical: "top",
    //                 horizontal: "left",
    //               }}
    //               open={Boolean(anchorElNav)}
    //               onClose={handleCloseNavMenu}
    //               sx={{ display: { xs: "block", md: "none" } }}
    //             >
    //               <MenuItem onClick={handleHome}>
    //                 <Typography sx={{ textAlign: "center", color: "#000" }}>
    //                   Home
    //                 </Typography>
    //               </MenuItem>
    //               <MenuItem onClick={handleFreePyme}>
    //                 <Typography sx={{ textAlign: "center", color: "#000" }}>
    //                   {isPyme ? "Servicios solicitados" : "Mis proyectos"}
    //                 </Typography>
    //               </MenuItem>
    //               {isPyme && (
    //                 <MenuItem onClick={handleFreePyme}>
    //                   <IconButton
    //                     sx={{
    //                       "&:hover": {
    //                         backgroundColor: "transparent",
    //                       },
    //                     }}
    //                     onClick={handleAddService}
    //                   >
    //                     <AddIcon sx={{ color: "#E3602D" }} />
    //                     <Typography
    //                       sx={{
    //                         fontFamily: "Inter",
    //                         fontStyle: "normal",
    //                         fontWeight: 400,
    //                         fontSize: "14px",
    //                         lineHeight: "17px",
    //                         textAlign: "center",
    //                         color: "#E3602D",
    //                       }}
    //                     >
    //                       Solicitar servicio
    //                     </Typography>
    //                   </IconButton>
    //                 </MenuItem>
    //               )}

    //               <MenuItem onClick={handleOpenUserMenu}>
    //                 <IconButton
    //                   sx={{
    //                     p: 0,
    //                     "&:hover": {
    //                       backgroundColor: "transparent",
    //                     },
    //                   }}
    //                 >
    //                   <Avatar alt="Remy Sharp" src={imageProfile} />
    //                   <Typography
    //                     sx={{
    //                       fontFamily: "Inter",
    //                       fontSize: "14px",
    //                       fontWeight: "400",
    //                       lineHeight: "25.6px",
    //                       color: "#191A24",
    //                       ml: "7px",
    //                       "&:hover": {
    //                         backgroundColor: "transparent",
    //                       },
    //                     }}
    //                   >
    //                     Mi perfil
    //                   </Typography>
    //                 </IconButton>
    //               </MenuItem>

    //               <MenuItem onClick={handleLogout}>
    //                 <IconButton
    //                   sx={{
    //                     p: 0,
    //                     "&:hover": {
    //                       backgroundColor: "transparent",
    //                     },
    //                   }}
    //                 >
    //                   <LogoutIcon />
    //                 </IconButton>
    //               </MenuItem>
    //             </Menu>
    //           </Box>
    //         )}
    //       </Tooltip> */}
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <AppBar position="static" className="nav-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/static/logo-agro.png"
            alt="Logo"
            sx={{
              height: "auto",
              width: "auto",
              display: { xs: "none", md: "flex" },
            }}
          />

          {/* Icono con menu desplegable en mobile */}
          <Box
            component="img"
            src="/static/logo-agro.png"
            alt="Logo"
            sx={{
              height: "auto",
              width: "auto",
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
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
              <MenuItem onClick={handleCloseNavMenu}>
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
                <TranslateIcon />
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
                  <Typography>{t("nav.es")}</Typography>
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("pt")}>
                  <Typography>{t("nav.pt")}</Typography>
                </MenuItem>
              </Menu>

              <MenuItem onClick={handleCloseNavMenu}>
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
            <Button className="nav-bar-btn" onClick={handleCloseNavMenu}>
              {t("nav.nosotros")}
            </Button>

            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => changeLanguage("es")}
            >
              Español
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => changeLanguage("pt")}
              style={{ marginLeft: "10px" }}
            >
              Português
            </Button> */}

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
                <Typography>{t("nav.promotor")}</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigateProductsMenu("biorhiza")}>
                <Typography>{t("nav.biorhiza")}</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleNavigateProductsMenu("amin")}>
                <Typography>{t("nav.amin")}</Typography>
              </MenuItem>
            </Menu>
            <Button className="nav-bar-btn" onClick={handleCloseNavMenu}>
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
                <Typography>{t("nav.es")}</Typography>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("pt")}>
                <Typography>{t("nav.pt")}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
