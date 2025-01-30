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
              backgroundImage: "url('/static/agro-4.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              zIndex: 1,
            }}
          />
          {/* <Typography className="products-text">
            Bajo el concepto de avanzada en el campo microbiológico, inoculación
            múltiple, <span className="products-text-important">AGROTECH-BIO</span>{" "}
            desarrollo un avanzado y exclusivo complejo de microorganismos con
            la presencia de 3 bacterias{" "}
            <span className="products-text-important">PGPR</span> sinérgicas entre sí. Su
            acción de <span className="products-text-important">bioestimulación</span>,{" "}
            <span className="products-text-important">biofertilización</span> y{" "}
            <span className="products-text-important">bioprotección</span> es superior a
            otros consorcios de microorganismos del mercado y muy superior a las
            formulaciones que poseen solo un microorganismo. Este consorcio de
            microorganismos denominado{" "}
            <span className="products-text-important">PROMOTOR PLUS</span> es aplicable y
            efectivo en una diversidad de cultivos y es apto para la producción
            agroecológica y convencional. <br /> Por otro lado, cuenta con{" "}
            <span className="products-text-important">AMIN GPB</span> cuyo principal
            componente son los L-alfa aminoácidos libres y contiene macro y
            micronutrientes. El contenido de aminoácidos es del 16%, 5% de
            fósforo y 4% de potasio. Apto para la producción agroecológica,
            convencional y en condiciones de producción orgánica.
          </Typography> */}
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
        </Box>
        <Box
          sx={{
            backgroundColor: "#A8D84D",
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
          {/* <Typography className="products-text">
            <span className="products-text-important">AGROTECH-BIO</span> se
            encuentra en el proceso de registro y aprobación de un avanzado y
            exclusivo complejo de Endomicorrizas denominado{" "}
            <span className="products-text-important">BIORHIZA ENDO</span> que
            va a estar disponible para el gran cultivo gracias al desarrollo
            tecnológico exclusivo desarrollado por{" "}
            <span className="products-text-important">AGROTECH-BIO</span> para
            su multiplicación y producción en escala.{" "}
            <span className="products-text-important">BIORHIZA ENDO</span> posee
            una importante acción de{" "}
            <span className="products-text-important">bioestimulación</span>,{" "}
            <span className="products-text-important">biofertilización</span> y{" "}
            <span className="products-text-important">bioprotección</span>.{" "}
            <br /> Estos productos tienen la particularidad que se pueden
            aplicar a una diversidad de cultivos en forma sencilla y mediante o
            conjuntamente con prácticas habituales que realiza el productor,
            como tratamiento de semillas, pulverización y riego. Tienen una
            amplia compatibilidad con la mayoría de los productos utilizados en
            el agro. La manipulación de los productos no entraña ningún riesgo
            para la salud humana ni para el ambiente y vienen empacados en
            recipientes de fácil manejo y destrucción. Existen otros productos
            en desarrollo y registro en senasa de carácter{" "}
            <span className="products-text-important">bioinsecticida</span> y{" "}
            <span className="products-text-important">biofunguicida</span>.
          </Typography> */}
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
            dangerouslySetInnerHTML={{ __html: t("products.product2.text2") }}
          />
          <Typography
            className="products-text"
            dangerouslySetInnerHTML={{ __html: t("products.product2.text3") }}
          />
          <Typography
            className="products-text"
            dangerouslySetInnerHTML={{ __html: t("products.product2.text4") }}
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
              backgroundImage: "url('/static/agro-6.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              zIndex: 1,
            }}
          />
          {/* <Typography className="products-text">
            <span className="products-text-important">AGROTECH-BIO</span>{" "}
            recomienda el uso de sus productos en forma conjunta ya que se
            genera una sinergia en los efectos de{" "}
            <span className="products-text-important">biofertilización</span>,{" "}
            <span className="products-text-important">bioestimulación</span> y{" "}
            <span className="products-text-important">bioprotección</span> de
            los cultivos lo que permite obtener mayores rendimientos y calidad
            de los productos cosechados.
          </Typography> */}
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
        </Box>
      </Box>
    </>
  );
};

export default Products;