import React, { useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../../footer";
import Navbar from "../../navbar";
import { Box, Container, Fab, Typography } from "@mui/material";

const Bogran = () => {
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
              {t("biorhiza.bogran-title")}
              <br />
              {t("biorhiza.bogran-sub-title")}
              <br />
              {t("biorhiza.bogran-sub-title-2")}
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
                    __html: t("biorhiza.bogran-text"),
                  }}
                />
                <Typography
                  className="promotor-text"
                  dangerouslySetInnerHTML={{
                    __html: t("biorhiza.bogran-text-2"),
                  }}
                />
                <Typography
                  className="promotor-text"
                  dangerouslySetInnerHTML={{
                    __html: t("biorhiza.bogran-text-3"),
                  }}
                />
              </Box>
            </Box>
  
            <Typography
              className="promotor-text-card-2"
              dangerouslySetInnerHTML={{
                __html:
                  t("biorhiza.bogran-title-list") === " "
                    ? null
                    : `
                <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
                  ${t("biorhiza.bogran-title-list")}
                  <br />
                </span>
                <ul>
                  <li>${t("biorhiza.bogran-1-list")}</li>
                  <li>${t("biorhiza.bogran-2-list")}</li>
                  <li>${t("biorhiza.bogran-3-list")}</li>
                  <li>${t("biorhiza.bogran-4-list")}</li>
                  <li>${t("biorhiza.bogran-5-list")}</li> 
                  <li>${t("biorhiza.bogran-6-list")}</li> 
                  <li>${t("biorhiza.bogran-7-list")}</li> 
                  <li>${t("biorhiza.bogran-8-list")}</li> 
                  <li>${t("biorhiza.bogran-9-list")}</li> 
                  <li>${t("biorhiza.bogran-10-list")}</li> 
                </ul>
              `,
              }}
            />
  
            <Typography
              sx={{ fontWeight: "bold", color: "#000" }}
              //className="promotor-text"
              dangerouslySetInnerHTML={{
                __html: t("biorhiza.bogran-title-2"),
              }}
            />
            <Typography
              className="promotor-text"
              dangerouslySetInnerHTML={{
                __html: t("biorhiza.bogran-text-4"),
              }}
            />
            <Typography
              className="promotor-text"
              dangerouslySetInnerHTML={{
                __html: t("biorhiza.bogran-text-5"),
              }}
            />
  
            <Typography
              sx={{ marginTop: "2rem" }}
              className="promotor-text-card-2"
              dangerouslySetInnerHTML={{
                __html:
                  t("biorhiza.bogran-title-list-2") === " "
                    ? null
                    : `
                <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
                  ${t("biorhiza.bogran-title-list-2")}
                  <br />
                </span>
                <ul>
                  <li>${t("biorhiza.bogran-11-list")}</li>
                  <li>${t("biorhiza.bogran-12-list")}</li>
                  <li>${t("biorhiza.bogran-13-list")}</li>
                  <li>${t("biorhiza.bogran-14-list")}</li>
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

export default Bogran