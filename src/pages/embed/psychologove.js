import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedOrpMap from "../../embed/components/EmbedOrpMap";
import { usePostMessageWithHeight } from "../../embed/hooks";
import {
  usePsychologistsData,
  useKrajeData,
  useOrpData,
} from "../../data/hooks";
import styles from "../../pages_styles/Embed.module.scss";

export default function EmbedPsychologists({ baseUrl }) {
  const orpData = useOrpData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const psychologistsData = usePsychologistsData(baseUrl);
  const { containerRef } = usePostMessageWithHeight(
    "paq-ukrajina-psychologove"
  );

  const [selectedOrpId, setSelectedOrpId] = React.useState(null);

  const categories = [
    { label: "600-1000", color: "#FEF0D9" },
    { label: "1000-2000", color: "#C4D3C9" },
    { label: "2000-4000", color: "#79ABB0" },
    { label: "4000-40000", color: "#288893" },
    { label: "žádný psycholog", color: "#747474" },
  ];

  const fillByOrpId = React.useMemo(() => {
    if (!psychologistsData) {
      return {};
    }

    const color = categories.reduce((carry, category) => {
      return { ...carry, [category.label]: category.color };
    }, {});

    return psychologistsData.reduce((carry, orpPsychologists) => {
      return {
        ...carry,
        [orpPsychologists.id]:
          color[orpPsychologists.psycholog_uvazek_na_pocet_zaku],
      };
    }, {});
  }, [psychologistsData, categories]);

  const orpPsychologistsById = React.useMemo(
    () => keyBy(psychologistsData, "id"),
    [psychologistsData]
  );

  if (!orpData || !krajeData || !psychologistsData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Počet žáků v&nbsp;přepočtu na jednoho psychologa v&nbsp;ORP
        </title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>Počet žáků v&nbsp;přepočtu na jednoho psychologa v&nbsp;ORP</h1>

        <div className={styles.legend}>
          {categories.map((category) => (
            <div key={category.color} className="legend-item">
              <span
                className="dot"
                style={{ backgroundColor: category.color }}
              ></span>
              {category.label.replace("-", "–")}
            </div>
          ))}
        </div>

        <div className={styles.mapWrapper}>
          <EmbedOrpMap
            orpData={orpData}
            krajeData={krajeData}
            selectedOrpId={selectedOrpId}
            setSelectedOrpId={setSelectedOrpId}
            fillByOrpId={fillByOrpId}
            renderTooltipContent={(orpId, feature) => (
              <div className={styles.tooltipContent}>
                <div className="tooltip-orp">
                  <div className="tooltip-orp-name">
                    {feature.properties.NAZEV}
                  </div>
                  <div className="tooltip-region">
                    {feature.properties.VUSC_NAZEV}
                  </div>
                </div>

                <div className="main-value-line">
                  <strong>
                    {orpPsychologistsById[orpId]
                      .psycholog_uvazek_na_pocet_zaku === "žádný psycholog" ? (
                      "žádný psycholog"
                    ) : (
                      <>
                        {orpPsychologistsById[
                          orpId
                        ].psycholog_uvazek_na_pocet_zaku.replace("-", "–")}{" "}
                        žáků v přepočtu na jednoho psychologa
                      </>
                    )}
                  </strong>
                </div>
              </div>
            )}
          />
        </div>

        <div className={styles.footer}>
          <div className="footer-item">
            Ze studie{" "}
            <a
              href="https://www.paqresearch.cz/post/integrace-ukrajinskych-uprchl%C3%ADku-v-cr-2022"
              target="_blank"
              rel="noreferrer"
            >
              Integrace ukrajinských uprchlíků v ČR 2022+
            </a>
          </div>
          <div className="footer-separator"> &nbsp;·&nbsp; </div>
          <div className="footer-item">
            Zdroj dat:{" "}
            <a
              href="https://www.paqresearch.cz/"
              target="_blank"
              rel="noreferrer"
            >
              PAQ&nbsp;Research
            </a>
            ,{" "}
            <a
              href="https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=dsady_RUIAN_vse&metadataID=CZ-00025712-CUZK_SERIES-MD_RUIAN-STATY-SHP"
              target="_blank"
              rel="noreferrer"
            >
              ČÚZK (CC-BY)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      baseUrl:
        process.env.NODE_ENV === "production"
          ? "https://vlki.github.io/paq-ukrajina-mapy"
          : "",
    },
  };
}
