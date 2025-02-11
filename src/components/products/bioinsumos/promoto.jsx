import React, { useEffect } from "react";
import Navbar from "../../navbar";
import { Box, Container, Fab, Typography } from "@mui/material";
import Footer from "../../footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Promoto = () => {
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
            {t("promotor.promoto-title")}
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
              src="/static/sg55.webp"
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
                  __html: t("promotor.promoto-text"),
                }}
              />
              <Typography
                className="promotor-text"
                dangerouslySetInnerHTML={{
                  __html: t("promotor.promoto-text-2"),
                }}
              />
            </Box>
          </Box>

          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("promotor.promoto-title-list") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #598428; display: inline-block; margin-bottom: 15px;">
                ${t("promotor.promoto-title-list")}
                <br />
              </span>
              <ul>
                <li>${t("promotor.promoto-1-list")}</li>
                <li>${t("promotor.promoto-2-list")}</li>
                <li>${t("promotor.promoto-3-list")}</li>
                <li>${t("promotor.promoto-4-list")}</li>
                <li>${t("promotor.promoto-5-list")}</li> 
              </ul>
            `,
            }}
          />
          <Typography
            sx={{ fontWeight: "bold", color: "#598428" }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.promoto-title-2"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.promoto-text-3"),
            }}
          />
          <Typography
            sx={{ fontWeight: "bold", color: "#598428", marginTop: "2rem" }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.promoto-title-list-2"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.promoto-text-4"),
            }}
          />
          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("promotor.promoto-title-list") === " "
                  ? null
                  : `
              <ul>
                <li>${t("promotor.promoto-6-list")}</li>
                <li>${t("promotor.promoto-7-list")}</li>
                <li>${t("promotor.promoto-8-list")}</li>
              </ul>
            `,
            }}
          />
          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("promotor.promoto-title-list") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #598428; display: inline-block; margin-bottom: 15px;">
                ${t("promotor.promoto-title-list-3")}
                <br />
              </span>
              <ul>
                <li>${t("promotor.promoto-9-list")}</li>
                <li>${t("promotor.promoto-10-list")}</li>
                <li>${t("promotor.promoto-11-list")}</li>
                <li>${t("promotor.promoto-12-list")}</li>
                <li>${t("promotor.promoto-13-list")}</li> 
                <li>${t("promotor.promoto-14-list")}</li> 
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

export default Promoto;
