import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Typography className="description-title">
        {t("products.title")}
      </Typography>
      <Box>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            p: 4,
            my: 2,
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('/static/agro-4.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              zIndex: 1,
            }}
          />
          {t("description.text-4") === " " ? (
            <>
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.description.text1", {
                    brand: t("products.highlights.brand"),
                    pgpr: t("products.highlights.pgpr"),
                  }),
                }}
              />
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.description.text2", {
                    bioestimulacion: t("products.highlights.bioestimulacion"),
                    biofertilizacion: t("products.highlights.biofertilizacion"),
                    bioproteccion: t("products.highlights.bioproteccion"),
                  }),
                }}
              />
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.description.text3", {
                    promotorPlus: t("products.highlights.promotorPlus"),
                  }),
                }}
              />
            </>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <span className="products-text-important">
                {t("biorhiza.title")}
                <br />{" "}
              </span>{" "}
              <Typography
                sx={{ textAlign: "justify" }}
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("biorhiza.text", {}),
                }}
              />
              <Typography
                sx={{ textAlign: "start" }}
                className="products-text"
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
          )}
        </Box>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            p: 4,
            my: 2,
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('/static/agro-7.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              zIndex: 1,
            }}
          />
          {t("description.text-4") === " " ? (
            <>
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.product2.text1", {
                    brand: t("products.highlights.brand"),
                    biorhizaEndo: t("products.highlights.biorhizaEndo"),
                  }),
                }}
              />
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.product2.text2"),
                }}
              />
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.product2.text3"),
                }}
              />
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.product2.text4"),
                }}
              />
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.product2.text5", {
                    bioinsecticida: t("products.highlights.bioinsecticida"),
                    biofunguicida: t("products.highlights.biofunguicida"),
                  }),
                }}
              />
            </>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <span className="products-text-important">
                {t("promotor.title")}
                <br />{" "}
              </span>{" "}
              <Typography
                sx={{ textAlign: "justify" }}
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("promotor.text", {}),
                }}
              />
              <Typography
                sx={{ textAlign: "justify" }}
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("promotor.text-2", {}),
                }}
              />
              <Typography
                sx={{ textAlign: "justify" }}
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("promotor.text-3", {}),
                }}
              />
              <Typography
                sx={{ textAlign: "justify" }}
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("promotor.text-4", {}),
                }}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            p: 4,
            my: 2,
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('/static/agro-6.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              zIndex: 1,
            }}
          />
          {t("description.text-4") === " " ? (
            <>
              <Typography
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("products.product3.text1", {
                    biofertilizacion: t("products.highlights.biofertilizacion"),
                    bioestimulacion: t("products.highlights.bioestimulacion"),
                    bioproteccion: t("products.highlights.bioproteccion"),
                  }),
                }}
              />
            </>
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <span className="products-text-important">
                {t("amin.title")}
                <br />{" "}
              </span>{" "}
              <Typography
                sx={{ textAlign: "justify" }}
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: t("amin.text", {}),
                }}
              />
              <Typography
                sx={{ textAlign: "start" }}
                className="products-text"
                dangerouslySetInnerHTML={{
                  __html: `
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
                        `,
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Products;
