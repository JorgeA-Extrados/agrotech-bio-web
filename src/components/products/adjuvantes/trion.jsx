import React, { useEffect } from "react";
import Navbar from "../../navbar";
import { Box, Container, Fab, Typography } from "@mui/material";
import Footer from "../../footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Trion = () => {
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
             {t("amin.title-trion")}
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
              src="/static/trion.webp"
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
                  __html: t("amin.text-trion"),
                }}
              />
              <Typography
                className="promotor-text"
                dangerouslySetInnerHTML={{
                  __html: t("amin.text-trion-2"),
                }}
              />
            </Box>
          </Box>

          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("amin.title-nugen") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
                ${t("amin.text-trion-3")}
                <br />
              </span>
              <ul>
                <li>${t("amin.text-trion-4")}</li>
                <li>${t("amin.text-trion-5")}</li>
                <li>${t("amin.text-trion-6")}</li>
                <li>${t("amin.text-trion-7")}</li>
              </ul>
            `,
            }}
          />
          <Typography
            className="promotor-text-card-2"
            dangerouslySetInnerHTML={{
              __html:
                t("amin.title-nugen") === " "
                  ? null
                  : `
              <span style="font-weight: bold; color: #000; display: inline-block; ">
                ${t("amin.text-trion-8")}
                <br />
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 10px; margin-top: 10px">
                ${t("amin.text-trion-9")}
                <br />
              </span>
              </span>
              <ul>
                <li>${t("amin.text-trion-10")}</li>
                <li>${t("amin.text-trion-11")}</li>
              </ul>
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 10px; margin-top: 10px">
                ${t("amin.text-trion-12")}
                <br />
              </span>
              <ul>
                <li>${t("amin.text-trion-13")}</li>
                <li>${t("amin.text-trion-14")}</li>
              </ul>
              <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 10px; margin-top: 10px">
                ${t("amin.text-trion-15")}
                <br />
              </span>
              <ul>
                <li>${t("amin.text-trion-16")}</li>
                <li>${t("amin.text-trion-17")}</li>
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

export default Trion;
