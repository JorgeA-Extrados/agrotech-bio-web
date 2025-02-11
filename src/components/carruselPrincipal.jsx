import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const CarruselPrincipal = () => {
  const { t } = useTranslation();

  var settings = {
    dots: false,
    infinite: true,
    speed: 1500, // Aumentar el tiempo de transición (más lento)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Aumentar el tiempo entre cada slide
    cssEase: "ease-in-out", // Hace la animación más suave
    pauseOnHover: false,
  };

  return (
    <div
      className="slider-container"
      style={{ marginTop: "2rem", maxWidth: "100%", overflow: "hidden" }}
    >
      <Slider {...settings}>
        <div>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "400px", sm: "400px", md: "500px", lg: "500px", xl: "600px" }, // Altura dinámica
            }}
          >
            <Box
              component="img"
              src="/static/shutterstock_2487565041.webp"
              alt="Imagen 1"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                // backgroundColor: "rgba(89, 132, 40, 0.5)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Typography className="carruselPrincipal-text" sx={{fontSize: { xs: "2.5rem", sm: "2.5rem", md: "5rem", lg: "6rem", xl: "7rem" }}}>
                {t("carrusel-principal.text-img-1")}
              </Typography>
            </Box>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "400px", sm: "400px", md: "500px", lg: "500px", xl: "600px" }, // Altura dinámica
            }}
          >
            <Box
              component="img"
              src="/static/shutterstock_2332630751.webp"
              alt="Imagen 2"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                //backgroundColor: "rgba(89, 132, 40, 0.5)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Typography className="carruselPrincipal-text"  sx={{fontSize: { xs: "2.5rem", sm: "2.5rem", md: "5rem", lg: "6rem", xl: "7rem" }}}>
                {t("carrusel-principal.text-img-2")}
              </Typography>
            </Box>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "400px", sm: "400px", md: "500px", lg: "500px", xl: "600px" }, // Altura dinámica
            }}
          >
            <Box
              component="img"
              src="/static/shutterstock_2523972127.webp"
              alt="Imagen 3"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                //backgroundColor: "rgba(89, 132, 40, 0.5)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Typography className="carruselPrincipal-text"  sx={{fontSize: { xs: "2.5rem", sm: "2.5rem", md: "5rem", lg: "6rem", xl: "7rem" }}}>
                {t("carrusel-principal.text-img-3")}
              </Typography>
            </Box>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "400px", sm: "400px", md: "500px", lg: "500px", xl: "600px" }, // Altura dinámica
            }}
          >
            <Box
              component="img"
              src="/static/shutterstock_2489689987.webp"
              alt="Imagen 4"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                //backgroundColor: "rgba(89, 132, 40, 0.5)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Typography className="carruselPrincipal-text"  sx={{fontSize: { xs: "2.5rem", sm: "2.5rem", md: "5rem", lg: "6rem", xl: "7rem" }}}>
                {t("carrusel-principal.text-img-4")}
              </Typography>
            </Box>
          </Box>
        </div>
      </Slider>
    </div>
  );
};

export default CarruselPrincipal;
