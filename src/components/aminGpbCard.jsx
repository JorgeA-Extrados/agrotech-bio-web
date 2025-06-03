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

const AminGpbCard = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleCardClick = (title) => {
    if (title === "nuge") {
      navigate("/adjuvantes/nuge");
    }
    if (title === "trio") {
      navigate("/adjuvantes/trio");
    }
    if (title === "correctorF") {
      navigate("/adjuvantes/correctorF");
    }
    if (title === "redec") {
      navigate("/adjuvantes/redec");
    }
    if (title === "oilcoLB") {
      navigate("/adjuvantes/oilcoLB");
    }
    if (title === "aon") {
      navigate("/adjuvantes/aon");
    }
    if (title === "topclean") {
      navigate("/adjuvantes/topclean");
    }
    if (title === "sg55") {
      navigate("/adjuvantes/sg55");
    }
  };
  return (
    <Box>
      <Typography className="promotor-title">
        {t("amin.title")}
        <br /> {t("amin.sub-title")}
        <br /> {t("amin.sub-title-2")}
      </Typography>

      {/* <Typography className="promotor-text">{t("amin.text")}</Typography> */}
      {t("amin.text-2") === " " ? null : (
        <>
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("amin.text"),
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
              src="/static/amin-gpb.webp"
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
                    t("amin.text-2") === " "
                      ? `
                          <span style="font-weight: bold; color: #598428;">
                            ${t("amin.title-list")}
                            <br />
                          </span>
                          <ul>
                            <li>${t("amin.1-list")}</li>
                            <li>${t("amin.2-list")}</li>
                            <li>${t("amin.3-list")}</li>
                            <li>${t("amin.4-list")}</li>
                            <li>${t("amin.5-list")}</li>
                            <li>${t("amin.6-list")}</li>
                            <li>${t("amin.7-list")}</li>
                            <li>${t("amin.8-list")}</li>
                          </ul>
                        `
                      : `
                          <span style="font-weight: bold; color: #598428;">
                            ${t("amin.title-list")}
                            <br />
                          </span>
                          <ul>
                            <li>${t("amin.1-list")}</li>
                            <li>${t("amin.2-list")}</li>
                            <li>${t("amin.3-list")}</li>
                            <li>${t("amin.4-list")}</li>
                            <li>${t("amin.5-list")}</li>
                          </ul>
                      `,
                }}
              />
              {t("amin.text-2") === " " ? null : (
                <Typography className="promotor-text-card">
                  <span style={{ fontWeight: "bold", color: "#598428 " }}>
                    {t("amin.text-2")} <br />
                  </span>{" "}
                  {t("amin.text-3")}
                </Typography>
              )}
            </Box>
          </Box>
        </>
      )}

      {t("amin.text-2") === " " ? null : (
        // <Box
        //   sx={{
        //     display: "flex",
        //     flexDirection: { xs: "column-reverse", md: "row" },
        //     justifyContent: "space-between",
        //     alignItems: "center",
        //     width: "100%",
        //     padding: 2,
        //   }}
        // >
        //   {/* Primer Box */}
        //   <Box
        //     sx={{
        //       padding: 2,
        //       width: { xs: "90%", md: "45%" },
        //       marginRight: { xs: "7%", md: 0 },
        //       textAlign: { xs: "center", md: "left" },
        //     }}
        //   >
        //     <Typography className="promotor-text-card">
        //       <span style={{ fontWeight: "bold", color: "#598428 " }}>
        //         {t("amin.text-4")} <br />{" "}
        //       </span>{" "}
        //       {t("amin.text-5")}
        //     </Typography>
        //     <Typography className="promotor-text-card">
        //       <span style={{ fontWeight: "bold", color: "#598428 " }}>
        //         {t("amin.text-6")}
        //         <br />{" "}
        //       </span>{" "}
        //       {t("amin.text-7")}
        //     </Typography>
        //   </Box>

        //   {/* Segundo Box */}
        //   <Box
        //     component="img"
        //     src="/static/agro-2.webp"
        //     alt="Semicírculo decorativo"
        //     sx={{
        //       padding: 2,
        //       width: { xs: "100%", md: "45%" },
        //       marginRight: { xs: "7%", md: 0 },
        //       borderRadius: "10px",
        //       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //     }}
        //   ></Box>
        // </Box>
        <Box>
          <Typography
            sx={{ fontWeight: "bold", color: "#598428", marginTop: 5 }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("amin.text-4"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("amin.text-5"),
            }}
          />

          <Typography
            sx={{ fontWeight: "bold", color: "#598428", marginTop: 5 }}
            //className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("amin.text-6"),
            }}
          />
          <Typography
            className="promotor-text"
            dangerouslySetInnerHTML={{
              __html: t("amin.text-7"),
            }}
          />
        </Box>
      )}

      {/* Cards */}
      {t("amin.title-nugen") === " " ? null : (
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
              onClick={() => handleCardClick("nuge")}
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
                  {t("amin.title-nugen")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-nugen-2")}
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
              onClick={() => handleCardClick("trio")}
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
                  {t("amin.title-trion")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-trion-2")}
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
              onClick={() => handleCardClick("correctorF")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/correcto.webp"
                alt={"Corrector F"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-correctorF")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-correctorF-2")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      )}

      {t("amin.title-nugen") === " " ? null : (
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
              onClick={() => handleCardClick("redec")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/redec.webp"
                alt={"redec"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-redec")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-redec-2")}
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
              onClick={() => handleCardClick("oilcoLB")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/oilcoLB.webp"
                alt={"oilcoLB"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-oilcoLB")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-oilcoLB-2")}
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
              onClick={() => handleCardClick("aon")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/aon.webp"
                alt={"aon"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-aon")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-aon-2")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      )}

      {t("amin.title-nugen") === " " ? null : (
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
              onClick={() => handleCardClick("topclean")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/topc.webp"
                alt={"topc"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-topclean")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-topclean-2")}
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
              onClick={() => handleCardClick("sg55")}
            >
              <CardMedia
                component="img"
                height="50%"
                width="50%"
                image="/static/sg55.webp"
                alt={"sg55"}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-sg55")}
                </Typography>
                <Typography className="products-card-title" align="center">
                  {t("amin.title-sg55-2")}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      )}

      {/* Fin cards */}

      {t("amin.title-trion") === " " ? null : <></>}

      {t("amin.title-correctorF") === " " ? null : <></>}

      {t("amin.title-redec") === " " ? null : <></>}

      {t("amin.title-oilcoLB") === " " ? null : <></>}

      {t("amin.title-aon") === " " ? null : <></>}

      {t("amin.title-topclean") === " " ? null : <></>}

      {t("amin.title-sg55") === " " ? null : <></>}
    </Box>
  );
};

export default AminGpbCard;
