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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: 2,
          }}
        >
          {/* Primer Box */}
          <Box
            sx={{
              padding: 2,
              width: { xs: "90%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography className="promotor-text-card">
              <span style={{ fontWeight: "bold", color: "#598428 " }}>
                {t("amin.text-4")} <br />{" "}
              </span>{" "}
              {t("amin.text-5")}
            </Typography>
            <Typography className="promotor-text-card">
              <span style={{ fontWeight: "bold", color: "#598428 " }}>
                {t("amin.text-6")}
                <br />{" "}
              </span>{" "}
              {t("amin.text-7")}
            </Typography>
          </Box>

          {/* Segundo Box */}
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
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-nugen")}
        //   </Typography>

        //   <Typography
        //     className="promotor-text"
        //     dangerouslySetInnerHTML={{
        //       __html: t("amin.sub-title-nugen"),
        //     }}
        //   />

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/nugen.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-nugen"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-nugen-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-nugen-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-nugen-4")}</li>
        //         <li>${t("amin.text-nugen-5")}</li>
        //         <li>${t("amin.text-nugen-6")}</li>
        //         <li>${t("amin.text-nugen-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-nugen-8")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-nugen-9")}</li>
        //         <li>${t("amin.text-nugen-10")}</li>
        //         <li>${t("amin.text-nugen-11")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
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
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      )}

      {/* Fin cards */}

      {t("amin.title-trion") === " " ? null : (
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-trion")}
        //   </Typography>

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/trion.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-trion"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-trion-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-trion-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-trion-4")}</li>
        //         <li>${t("amin.text-trion-5")}</li>
        //         <li>${t("amin.text-trion-6")}</li>
        //         <li>${t("amin.text-trion-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; ">
        //         ${t("amin.text-trion-8")}
        //         <br />
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 10px; margin-top: 10px">
        //         ${t("amin.text-trion-9")}
        //         <br />
        //       </span>
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-trion-10")}</li>
        //         <li>${t("amin.text-trion-11")}</li>
        //       </ul>
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 10px; margin-top: 10px">
        //         ${t("amin.text-trion-12")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-trion-13")}</li>
        //         <li>${t("amin.text-trion-14")}</li>
        //       </ul>
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 10px; margin-top: 10px">
        //         ${t("amin.text-trion-15")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-trion-16")}</li>
        //         <li>${t("amin.text-trion-17")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
        <></>
      )}

      {t("amin.title-correctorF") === " " ? null : (
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-correctorF")}
        //   </Typography>

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/correcto.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-correctorF"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-correctorF-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-correctorF-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-correctorF-4")}</li>
        //         <li>${t("amin.text-correctorF-5")}</li>
        //         <li>${t("amin.text-correctorF-6")}</li>
        //         <li>${t("amin.text-correctorF-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
        <></>
      )}

      {t("amin.title-redec") === " " ? null : (
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-redec")}
        //   </Typography>

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/redec.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-redec"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-redec-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-redec-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-redec-4")}</li>
        //         <li>${t("amin.text-redec-5")}</li>
        //         <li>${t("amin.text-redec-6")}</li>
        //         <li>${t("amin.text-redec-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-nuredecgen-8")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-redec-9")}</li>
        //         <li>${t("amin.text-redec-10")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
        <></>
      )}

      {t("amin.title-oilcoLB") === " " ? null : (
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-oilcoLB")}
        //   </Typography>

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/oilcoLB.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-oilcoLB"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-oilcoLB-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-nugen") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-oilcoLB-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-oilcoLB-4")}</li>
        //         <li>${t("amin.text-oilcoLB-5")}</li>
        //         <li>${t("amin.text-oilcoLB-6")}</li>
        //         <li>${t("amin.text-oilcoLB-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-oilcoLB") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-oilcoLB-8")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-oilcoLB-9")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
        <></>
      )}

      {t("amin.title-aon") === " " ? null : (
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-aon")}
        //   </Typography>

        //   <Typography
        //     className="promotor-text"
        //     dangerouslySetInnerHTML={{
        //       __html: t("amin.sub-title-aon"),
        //     }}
        //   />

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/aon.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-aon"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-aon-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-aon") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-aon-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-aon-4")}</li>
        //         <li>${t("amin.text-aon-5")}</li>
        //         <li>${t("amin.text-aon-6")}</li>
        //         <li>${t("amin.text-aon-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-aon") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-aon-8")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-aon-9")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
        <></>
      )}

      {t("amin.title-topclean") === " " ? null : (
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-topclean")}
        //   </Typography>

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/topc.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-topclean"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-topclean-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-topclean") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-topclean-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-topclean-4")}</li>
        //         <li>${t("amin.text-topclean-5")}</li>
        //         <li>${t("amin.text-topclean-6")}</li>
        //         <li>${t("amin.text-topclean-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-topclean") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-topclean-8")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-topclean-9")}</li>
        //         <li>${t("amin.text-topclean-10")}</li>
        //         <li>${t("amin.text-topclean-11")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
        <></>
      )}

      {t("amin.title-sg55") === " " ? null : (
        // <>
        //   <Typography className="promotor-title">
        //     {t("amin.title-sg55")}
        //   </Typography>

        //   <Box
        //     sx={{
        //       display: "flex",
        //       flexDirection: { xs: "column", md: "row" },
        //       justifyContent: "space-between",
        //       alignItems: "center",
        //       width: "100%",
        //       padding: 2,
        //     }}
        //   >
        //     {/* Primer Box */}
        //     <Box
        //       component="img"
        //       src="/static/sg55.webp"
        //       alt="Semicírculo decorativo"
        //       sx={{
        //         padding: 2,
        //         width: { xs: "100%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         // borderRadius: "10px",
        //         // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        //       }}
        //     ></Box>

        //     {/* Segundo Box */}
        //     <Box
        //       sx={{
        //         padding: 2,
        //         width: { xs: "90%", md: "45%" },
        //         marginRight: { xs: "7%", md: 0 },
        //         textAlign: { xs: "center", md: "left" },
        //       }}
        //     >
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-sg55"),
        //         }}
        //       />
        //       <Typography
        //         className="promotor-text"
        //         dangerouslySetInnerHTML={{
        //           __html: t("amin.text-sg55-2"),
        //         }}
        //       />
        //     </Box>
        //   </Box>

        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-sg55") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-sg55-3")}
        //         <br />
        //       </span>
        //       <ul>
        //         <li>${t("amin.text-sg55-4")}</li>
        //         <li>${t("amin.text-sg55-5")}</li>
        //         <li>${t("amin.text-sg55-6")}</li>
        //         <li>${t("amin.text-sg55-7")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        //   <Typography
        //     className="promotor-text-card-2"
        //     dangerouslySetInnerHTML={{
        //       __html:
        //         t("amin.title-sg55") === " "
        //           ? null
        //           : `
        //       <span style="font-weight: bold; color: #000; display: inline-block; margin-bottom: 15px;">
        //         ${t("amin.text-sg55-8")}
        //         <br />
        //       </span>
        //         <br />
        //         ${t("amin.text-sg55-9")}
        //       <ul>
        //         <li>${t("amin.text-sg55-10")}</li>
        //         <li>${t("amin.text-sg55-11")}</li>
        //         <li>${t("amin.text-sg55-12")}</li>
        //       </ul>
        //     `,
        //     }}
        //   />
        // </>
        <></>
      )}
    </Box>
  );
};

export default AminGpbCard;
