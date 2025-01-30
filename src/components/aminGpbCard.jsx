import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const AminGpbCard = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography className="promotor-title">
        {t("amin.title")}
        <br /> {t("amin.sub-title")}
        <br /> {t("amin.sub-title-2")}
      </Typography>
      <Typography className="promotor-text">{t("amin.text")}</Typography>
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
            {t("amin.text-2") === " " ? (
              <>
                <span style={{ fontWeight: "bold", color: "#598428 " }}>
                  {t("amin.title-list")}
                  <br />
                </span>
                <ul>
                  <li>{t("amin.1-list")}</li>
                  <li>{t("amin.2-list")}</li>
                  <li>{t("amin.3-list")}</li>
                  <li>{t("amin.4-list")}</li>
                  <li>{t("amin.5-list")}</li>
                  <li>{t("amin.6-list")}</li>
                  <li>{t("amin.7-list")}</li>
                  <li>{t("amin.8-list")}</li>
                </ul>
              </>
            ) : (
              <>
                <span style={{ fontWeight: "bold", color: "#598428 " }}>
                  {t("amin.title-list")}
                  <br />
                </span>
                <ul>
                  <li>{t("amin.1-list")}</li>
                  <li>{t("amin.2-list")}</li>
                  <li>{t("amin.3-list")}</li>
                  <li>{t("amin.4-list")}</li>
                  <li>{t("amin.5-list")}</li>
                </ul>
              </>
            )}
            {/* <span style={{ fontWeight: "bold", color: "#598428 " }}>
              Beneficios: <br />
            </span>{" "}
            <ul>
              <li>Mejora el rendimiento y la calidad de los cultivos.</li>
              <li>
                Bioestimula los procesos fisiológicos de producción del cultivo.
              </li>
              <li>Incrementa la tolerencia a diferente tipos de estrés.</li>
              <li>Aporta nitrógeno, macro y micro nutrientes</li>
              <li>Mejora la sanidad del cultivo</li>
            </ul> */}
          </Typography>
          {t("amin.text-2") === " " ? null : (
            <Typography className="promotor-text-card">
              <span style={{ fontWeight: "bold", color: "#598428 " }}>
                {t("amin.text-2")} <br />
              </span>{" "}
              {t("amin.text-3")}
            </Typography>
          )}
          {/* <Typography className="promotor-text-card">
            <span style={{ fontWeight: "bold", color: "#598428 " }}>
              Formas de utilización: <br />
            </span>{" "}
            Se puede utilizar en todos los cultivos y en diferentes etapas
            fenológicas. En semilla se aplica solo o en forma conjunta con
            inoculantes o con curasemillas; en almacigo mediante el riego y
            aplicaciones foliares y por drench en cultivos recién trasplantados.
            En cultivos ya implantados se aplica en forma foliar o se puede
            aplicar mediante el riego por goteo. Su aplicación es compatible con
            otros bioinsumos, fertilizantes, insecticidas, funguicidas,
            bactericidas y herbicidas, entre otros. Su uso no entraña riesgo
            para la salud humana y el medio ambiente.
          </Typography> */}
        </Box>
      </Box>
      {t("amin.text-2") === " " ? null : (
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
            sx={{
              padding: 2,
              width: "45%",
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
            src="/static/agro-2.jpeg"
            alt="Semicírculo decorativo"
            sx={{
              padding: 2,
              width: "45%",
              borderRadius: "10px", // Borde redondeado
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombreado suave
            }}
          ></Box>
        </Box>
      )}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
      >
        <Box
          sx={{
            padding: 2,
            width: "45%",
          }}
        >
          <Typography className="promotor-text-card">
            <span style={{ fontWeight: "bold", color: "#598428 " }}>
              Para su preparación: <br />{" "}
            </span>{" "}
            Se debe diluir en agua en las dosis recomendadas en función del
            momento y forma de aplicación y de acuerdo al cultivo. En semilla:
            se puede aplicar solo o en forma conjunta con curasemillas o
            inocultantes según las dosis recomendadas de acuerdo al cultivo.
            Almacigo: Se aplica mediante riego con regaderas o a través de
            pulverizaciones foliares en las dosis recomendadas de acuerdo al
            cultivo y se pueden realizar una o más aplicaciones. Cultivos
            implantados: En cultivos implantados se aplica habitualmente en
            forma foliar y se pueden hacer una o más aplicaciones. También se
            puede aplicar a través del riego por goteo, en este caso las dosis
            son 30 a 50% mayores a las aplicaciones foliares.
          </Typography>
          <Typography className="promotor-text-card">
            <span style={{ fontWeight: "bold", color: "#598428 " }}>
              Precaución: <br />{" "}
            </span>{" "}
            Mantener fuera del alcance de los niños y animales. Usar elementos
            de protección. Seguir indicaciones de uso y aplicación. Conservar en
            ambiente fresco y oscuro. No mezclar con productos cúpricos para
            evitar posibles efectos fitotóxicos. En la mezcla de producto
            agregar al final. Ante dudas de compatibilidad es conveniente
            realizar una prueba previa en 20 litros de caldo para pulverizar.
          </Typography>
        </Box>

        <Box
          component="img"
          src="/static/agro-2.jpeg"
          alt="Semicírculo decorativo"
          sx={{
            padding: 2,
            width: "45%",
            borderRadius: "10px", // Borde redondeado
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombreado suave
          }}
        ></Box>
      </Box> */}
    </Box>
  );
};

export default AminGpbCard;
