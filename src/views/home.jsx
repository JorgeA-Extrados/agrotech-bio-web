import { Alert, Container, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import * as turf from "@turf/turf";
import "../styles/home.css";
import CarruselPrincipal from "../components/carruselPrincipal";
import Description from "../components/description";
import Products from "../components/products";
import ProductsCard from "../components/products-card";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [coords, setCoords] = useState(null);
  const [errorMsg, setErrorMsg] = useState(""); // Estado para el mensaje de error
  const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para abrir/cerrar el Snackbar
  const { t, i18n } = useTranslation();

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        console.log("Estado del permiso:", permissionStatus.state);

        if (permissionStatus.state === "granted") {
          getLocation();
        } else if (permissionStatus.state === "prompt") {
          getLocation();
        } else {
          showError("Usted debe configurar la selección de idioma.");
        }

        permissionStatus.onchange = () => {
          console.log("Nuevo estado del permiso:", permissionStatus.state);
          if (permissionStatus.state === "granted") {
            setErrorMsg("");
            setOpenSnackbar(false);
            getLocation();
          }
        };
      });
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      showError("Geolocalización no soportada en este navegador.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Ubicación obtenida:", latitude, longitude);
        setCoords({ lat: latitude, lon: longitude });
        setErrorMsg("");
        setOpenSnackbar(false);
      },
      (error) => {
        console.error("Error obteniendo la geolocalización:", error.message);

        if (!coords) {
          showError(t("whatsapp.error-text"));
        }
      }
    );
  };

  const showError = (message) => {
    setErrorMsg(message);
    setOpenSnackbar(true);
  };


  console.log("================coords====================");
  console.log(coords);
  console.log("====================================");

  useEffect(() => {
    if (!coords) return;

    const findCountry = async () => {
      try {
        const response = await fetch("/countries.geojson");
        const geojson = await response.json();

        if (
          !geojson ||
          geojson.type !== "FeatureCollection" ||
          !Array.isArray(geojson.features)
        ) {
          throw new Error("El archivo GeoJSON no tiene un formato válido");
        }

        const point = turf.point([coords.lon, coords.lat]);

        for (const feature of geojson.features) {
          // debugger;
          const polygon = turf.feature(feature.geometry);
          if (turf.booleanPointInPolygon(point, polygon)) {
            if (feature.properties.ADMIN === "Argentina") {
              i18n.changeLanguage("es");
            } else {
              i18n.changeLanguage("pt");
            }
            return;
          }
        }
      } catch (error) {
        console.error("Error al cargar el archivo GeoJSON:", error);
      }
    };

    findCountry();
  }, [coords]);

  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/${t("contact.what-tel")}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Navbar />
      <CarruselPrincipal />
      <Container sx={{ marginTop: "5rem" }}>
        <Description />
        <Products />
        <ProductsCard />
        <Contact />
      </Container>
      <Footer />
      {/* Botón flotante Fab */}
      <Fab
        onClick={handleWhatsAppRedirect}
        variant="extended"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
          background: "#43CD66",
          color: "#fff",
        }}
      >
        <WhatsAppIcon sx={{ mr: 1 }} />
        {t("whatsapp.text")}
      </Fab>

      {/* Snackbar flotante */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Cierra automáticamente después de 6 segundos
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Posición flotante
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="warning">
          {errorMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
