import React, { useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../../footer";
import Navbar from "../../navbar";
import { Box, Container, Fab, Typography } from "@mui/material";

const Bofoliar = () => {
  const { t } = useTranslation();
  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/${t("contact.what-tel")}`;

    window.open(whatsappURL, "_blank");
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (t("amin.text-2") !== " ") {
      navigate("/");
    }
  }, [t, navigate]); // Se ejecuta cuando `t` cambia

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "2rem", marginBottom: "10rem" }}>
        <>
          <Typography className="promotor-title">
            {t("biorhiza.bofoliar-title")}
            <br />
            {t("biorhiza.bofoliar-sub-title")}
            <br />
            {t("biorhiza.bofoliar-sub-title-2")}
            <br />
            {t("biorhiza.bofoliar-sub-title-3")}
            <br />
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: 2,
            }}
          >
            {/* Primer Box */}
            <Box
              component="img"
              src="/static/bofoliar.webp"
              alt="Semicírculo decorativo"
              sx={{
                padding: 2,
                width: { xs: "100%", md: "45%" },
                marginRight: { xs: "7%", md: 0 },
                // borderRadius: "10px",
                // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            ></Box>

            {/* Segundo Box */}
            <Box
              sx={{
                padding: 2,
                width: { xs: "90%", md: "45%" },
                marginRight: { xs: "7%", md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                className="promotor-text"
                dangerouslySetInnerHTML={{
                  __html: t("biorhiza.bofoliar-text"),
                }}
              />
              <Typography
                className="promotor-text"
                dangerouslySetInnerHTML={{
                  __html: t("biorhiza.bofoliar-text-2"),
                }}
              />
              <Typography
                className="promotor-text"
                dangerouslySetInnerHTML={{
                  __html: t("biorhiza.bofoliar-text-3"),
                }}
              />
            </Box>
          </Box>

          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("biorhiza.bofoliar-title-list") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
                ${t("biorhiza.bofoliar-title-list")}
                <br />
              </span>
              <ul>
                <li>${t("biorhiza.bofoliar-1-list")}</li>
                <li>${t("biorhiza.bofoliar-2-list")}</li>
                <li>${t("biorhiza.bofoliar-3-list")}</li>
                <li>${t("biorhiza.bofoliar-4-list")}</li>
                <li>${t("biorhiza.bofoliar-5-list")}</li> 
                <li>${t("biorhiza.bofoliar-6-list")}</li> 
                <li>${t("biorhiza.bofoliar-7-list")}</li> 
                <li>${t("biorhiza.bofoliar-8-list")}</li> 
                <li>${t("biorhiza.bofoliar-9-list")}</li> 
              </ul>
            `,
            }}
          />

          <Typography
            sx={{ fontWeight: "bold", color: "#000" }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("biorhiza.bofoliar-title-2"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("biorhiza.bofoliar-text-4"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("biorhiza.bofoliar-text-5"),
            }}
          />

          <Typography
            sx={{ fontWeight: "bold", color: "#000", marginTop: "2rem" }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("biorhiza.bofoliar-title-3"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("biorhiza.bofoliar-text-6"),
            }}
          />

          <Typography
            sx={{ marginTop: "2rem" }}
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("biorhiza.bofoliar-title-list-3") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
                ${t("biorhiza.bofoliar-title-list-3")}
                <br />
              </span>
              <ul>
                <li>${t("biorhiza.bofoliar-10-list")}</li>
                <li>${t("biorhiza.bofoliar-11-list")}</li>
                <li>${t("biorhiza.bofoliar-12-list")}</li>
                <li>${t("biorhiza.bofoliar-13-list")}</li>
                <li>${t("biorhiza.bofoliar-14-list")}</li>
              </ul>
            `,
            }}
          />
        </>
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
    </>
  );
};

export default Bofoliar;
