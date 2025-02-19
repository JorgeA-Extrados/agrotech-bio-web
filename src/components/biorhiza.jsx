import { Box, Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Biorhiza = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleCardClick = (title) => {
    if (title === "bofoliar") {
      navigate("/biorhiza/bofoliar");
    }
    if (title === "boracid") {
      navigate("/biorhiza/boracid");
    }
    if (title === "boulexita") {
      navigate("/biorhiza/boulexita");
    }
    if (title === "bogran") {
      navigate("/biorhiza/bogran");
    }
  };
  return (
    <Box>
      <Typography className="promotor-title">
        {t("biorhiza.title")} <br /> {t("biorhiza.sub-title")}
      </Typography>

      {t("biorhiza.bofoliar-title") === " " ? (
        <>
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("biorhiza.text"),
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
              src="/static/agro-1.webp"
              alt="Semicírculo decorativo"
              sx={{
                padding: 2,
                width: { xs: "100%", md: "45%" },
                marginRight: { xs: "7%", md: 0 },
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
                className="promotor-text-card"
                dangerouslySetInnerHTML={{
                  __html: `
                <span style="font-weight: bold; color: #598428;">
                  ${t("biorhiza.title-list")}
                  <br />
                </span>
                <ul>
                  <li>${t("biorhiza.1-list")}</li>
                  <li>${t("biorhiza.2-list")}</li>
                  <li>${t("biorhiza.3-list")}</li>
                  <li>${t("biorhiza.4-list")}</li>
                  ${
                    t("biorhiza.5-list") !== " "
                      ? `<li>${t("biorhiza.5-list")}</li>`
                      : ""
                  }
                </ul>
              `,
                }}
              />
            </Box>
          </Box>
        </>
      ) : (
          <>
        <Grid2
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: "4rem", marginBottom: "4rem" }}
        >
          <Grid2 item xs={12} sm={4}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: 480,
                cursor: "pointer",
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleCardClick("bofoliar")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/nugen.webp"
                alt={"Nugen"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("biorhiza.bofoliar-title")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: 480,
                cursor: "pointer",
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleCardClick("boracid")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/trion.webp"
                alt={"Trion"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("biorhiza.boracid-title")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
        <Grid2
          container
          spacing={4}
          justifyContent="center"
          sx={{ marginTop: "4rem", marginBottom: "4rem" }}
        >
          <Grid2 item xs={12} sm={4}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: 480,
                cursor: "pointer",
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleCardClick("boulexita")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/nugen.webp"
                alt={"Nugen"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("biorhiza.boulexita-title")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Card
              sx={{
                maxWidth: 345,
                minHeight: 480,
                cursor: "pointer",
                borderRadius: 2,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => handleCardClick("bogran")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/trion.webp"
                alt={"Trion"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("biorhiza.bogran-title")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
          </>
      )}
    </Box>
  );
};

export default Biorhiza;
