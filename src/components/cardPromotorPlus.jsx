import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CardPromotorPlus = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleCardClick = (title) => {
    if (title === "promoto") {
      navigate("/bioinsumos/promoto");
    }
    if (title === "biorhiza") {
      navigate("/bioinsumos/biorhiza");
    }
    if (title === "amin") {
      navigate("/bioinsumos/amin");
    }
  };
  return (
    <Box>
      <Typography className="promotor-title">
        {t("promotor.title")}
        <br /> {t("promotor.sub-title")}
        <br /> {t("promotor.sub-title-2")}
      </Typography>
      {t("amin.title-nugen") === " " ? (
        <>
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.text"),
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
              src="/static/promotor-plus.webp"
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
                className="promotor-text-card"
                dangerouslySetInnerHTML={{
                  __html:
                    t("promotor.1-list") === " "
                      ? t("promotor.title-list")
                      : `
            <span style="font-weight: bold; color: #598428;">
              ${t("promotor.title-list")}
            </span>
            <ul>
              <li>${t("promotor.1-list")}</li>
              <li>${t("promotor.2-list")}</li>
              <li>${t("promotor.3-list")}</li>
              <li>${t("promotor.4-list")}</li>
              <li>${t("promotor.5-list")}</li>
            </ul>
          `,
                }}
              />
              <Typography
                className="promotor-text-card"
                dangerouslySetInnerHTML={{
                  __html:
                    t("promotor.1-list") === " "
                      ? t("promotor.text-2")
                      : `
            <span style="font-weight: bold; color: #598428;">
              ${t("promotor.text-2")}
            </span><br />
            ${t("promotor.text-3")}
          `,
                }}
              />
            </Box>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: 2,
            }}
          >
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
                  __html:
                    t("promotor.1-list") === " "
                      ? `${t("promotor.text-3")} <br /> ${t("promotor.text-4")}`
                      : `
            <span style="font-weight: bold; color: #598428;">
              ${t("promotor.text-4")}
            </span><br />
            ${t("promotor.text-5")}
          `,
                }}
              />
              <Typography
                className="promotor-text-card"
                dangerouslySetInnerHTML={{
                  __html: `
        <span style="font-weight: bold; color: #598428;">
          ${t("promotor.text-6")}
        </span><br />
        ${t("promotor.text-7")}
      `,
                }}
              />
            </Box>
            <Box
              component="img"
              src="/static/agro-2.webp"
              alt="Semicírculo decorativo"
              sx={{
                padding: 2,
                width: { xs: "100%", md: "45%" },
                marginRight: { xs: "7%", md: 0 },
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            ></Box>
          </Box> */}

          <Typography
            sx={{ fontWeight: "bold", color: "#598428", marginTop: 5 }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.text-4"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.text-5"),
            }}
          />

          <Typography
            sx={{ fontWeight: "bold", color: "#598428", marginTop: 5 }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.text-6"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("promotor.text-7"),
            }}
          />
        </>
      ) : (
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
              onClick={() => handleCardClick("promoto")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/promotor-plus.webp"
                alt={"promotor-plus"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("promotor.promoto-title")}
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
              onClick={() => handleCardClick("biorhiza")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/BIORHIZA.webp"
                alt={"Trion"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("promotor.biorhiza-title")}
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
              onClick={() => handleCardClick("amin")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/amin-gpb.webp"
                alt={"Corrector F"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("promotor.amin-title")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      )}
    </Box>
  );
};

export default CardPromotorPlus;
