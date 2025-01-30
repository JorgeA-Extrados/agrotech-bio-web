import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppRedirect = () => {
    const { nombre, email, telefono, motivo, mensaje } = formData;

    const whatsappMessage = `
        *Nombre:* ${nombre}
        *Email:* ${email}
        *Teléfono:* ${telefono}
        *Motivo:* ${motivo}
        *Mensaje:* ${mensaje}
        `.replace(/\n/g, "%0A"); // Codificar saltos de línea

    const whatsappURL = `https://wa.me/5493834400061?text=${whatsappMessage}`; // Cambia 34612345678 por tu número de WhatsApp

    window.open(whatsappURL, "_blank");

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "",
      mensaje: "",
    });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@agrotech-bio.com";
  };

  const customTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInput-underline:after": {
              borderBottomColor: "#598428",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#598428",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          padding: 2,
        }}
      >
        {/* Primer Box */}
        <Box
          sx={{
            padding: 2,
            width: "45%",
          }}
        >
          <Typography className="contact-title">{t("contact.title")}</Typography>
          <Typography className="contact-text">
          {t("contact.text")}
          </Typography>
          <Link
            className="contact-text-email"
            href="#"
            onClick={handleEmailClick}
            underline="none"
            style={{
              color: "blue",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {t("contact.info-email")}
          </Link>
        </Box>

        {/* Segundo Box */}
        <Box
          sx={{
            padding: 2,
            width: "45%",
          }}
        >
          <Card elevation={3} style={{ padding: "1rem", width: "100%" }}>
            <CardContent>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  label={t("contact.nombre")}
                  variant="standard"
                  fullWidth
                  margin="normal"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
                <TextField
                  label={t("contact.email")}
                  variant="standard"
                  fullWidth
                  margin="normal"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  label={t("contact.telefono")}
                  variant="standard"
                  fullWidth
                  margin="normal"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
                <TextField
                  label={t("contact.consulta")}
                  variant="standard"
                  fullWidth
                  margin="normal"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleInputChange}
                />
                <TextField
                  label={t("contact.mensaje")}
                  variant="standard"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                />
                <Box mt={2}>
                  <Button
                    className="contact-btn"
                    fullWidth
                    onClick={handleWhatsAppRedirect}
                  >
                    <WhatsAppIcon /> {t("contact.enviar")}
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
