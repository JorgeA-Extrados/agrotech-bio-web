import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Biorhiza = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography className="promotor-title">
        {t("biorhiza.title")} <br /> {t("biorhiza.sub-title")}
      </Typography>
      <Typography className="promotor-text">{t("biorhiza.text")}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
      >
        {/* Primer Box */}
        <Box
          component="img"
          src="/static/agro-1.jpg"
          alt="Semicírculo decorativo"
          sx={{
            padding: 2,
            width: "45%",
            borderRadius: "10px", // Borde redondeado
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombreado suave
          }}
        ></Box>

        {/* Segundo Box */}
        <Box
          sx={{
            padding: 2,
            width: "45%",
          }}
        >
          <Typography className="promotor-text-card">
            <span style={{ fontWeight: "bold", color: "#598428 " }}>
              {t("biorhiza.title-list")} <br />
            </span>{" "}
            <ul>
              <li>{t("biorhiza.1-list")}</li>
              <li>{t("biorhiza.2-list")}</li>
              <li>{t("biorhiza.3-list")}</li>
              <li>{t("biorhiza.4-list")}</li>
              {t("biorhiza.5-list") === " " ? null : (
                <li>{t("biorhiza.5-list")}</li>
              )}
            </ul>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Biorhiza;
