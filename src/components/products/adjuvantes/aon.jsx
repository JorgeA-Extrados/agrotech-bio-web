import React, { useEffect } from "react";
import Navbar from "../../navbar";
import { Box, Container, Fab, Typography } from "@mui/material";
import Footer from "../../footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Aon = () => {
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
            {t("amin.title-aon")}
          </Typography>

          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("amin.sub-title-aon"),
            }}
          />

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
              src="/static/aon.webp"
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
                  __html: t("amin.text-aon"),
                }}
              />
              <Typography
                className="promotor-text"
                dangerouslySetInnerHTML={{
                  __html: t("amin.text-aon-2"),
                }}
              />
            </Box>
          </Box>

          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("amin.title-aon") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
                ${t("amin.text-aon-3")}
                <br />
              </span>
              <ul>
                <li>${t("amin.text-aon-4")}</li>
                <li>${t("amin.text-aon-5")}</li>
                <li>${t("amin.text-aon-6")}</li>
                <li>${t("amin.text-aon-7")}</li>
              </ul>
            `,
            }}
          />
          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("amin.title-aon") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
                ${t("amin.text-aon-8")}
                <br />
              </span>
              <ul>
                <li>${t("amin.text-aon-9")}</li>
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

export default Aon;
