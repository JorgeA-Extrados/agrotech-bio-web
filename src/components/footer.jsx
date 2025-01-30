import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box component="footer" className="footer">
      {/* Middle Section */}
      <Grid2
        container
        sx={{
          justifyContent: "center", // Distribuye los elementos al inicio y al final
          alignItems: "center", // Alinea verticalmente
          padding: 2, // Opcional: Espaciado dentro del contenedor
        }}
      >
        <Typography className="footer-text">©2019 by Agrotech-Bio.</Typography>
        <Typography>
          <Link href="https://www.extrados.ar/" className="footer-web">
            &nbsp; {t("footer.text")}
          </Link>
        </Typography>
      </Grid2>
    </Box>
  );
};

export default Footer;
