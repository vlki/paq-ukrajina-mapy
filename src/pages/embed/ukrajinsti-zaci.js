import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedOrpMap from "../../embed/components/EmbedOrpMap";
import { usePostMessageWithHeight } from "../../embed/hooks";
import {
  useUkrainianPupilsData,
  useKrajeData,
  useOrpData,
} from "../../data/hooks";
import styles from "../../pages_styles/Embed.module.scss";

export default function EmbedUkrainianPupils({ baseUrl }) {
  const orpData = useOrpData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const ukrainianPupilsData = useUkrainianPupilsData(baseUrl);
  const { containerRef } = usePostMessageWithHeight(
    "paq-ukrajina-ukrajinsti-zaci"
  );

  const [selectedOrpId, setSelectedOrpId] = React.useState(null);

  const categories = [
    { label: "25 a méně", color: "#FEF0D9" },
    { label: "25–50", color: "#C4D3C9" },
    { label: "50–100", color: "#79ABB0" },
    { label: "100–200", color: "#288893" },
    { label: "200 a více", color: "#005B6E" },
  ];

  const fillByOrpId = React.useMemo(() => {
    if (!ukrainianPupilsData) {
      return {};
    }

    const color = d3
      .scaleThreshold()
      .domain([25, 50, 100, 200, 10000])
      .range(["#FEF0D9", "#C4D3C9", "#79ABB0", "#288893", "#005B6E"]);

    return ukrainianPupilsData.reduce((carry, orpUkrainianPupils) => {
      return {
        ...carry,
        [orpUkrainianPupils.id]: color(
          orpUkrainianPupils.ukrajinci_na_10000_zaku
        ),
      };
    }, {});
  }, [ukrainianPupilsData]);

  const orpUkrainianPupilsById = React.useMemo(
    () => keyBy(ukrainianPupilsData, "id"),
    [ukrainianPupilsData]
  );

  if (!orpData || !krajeData || !ukrainianPupilsData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Počet ukrajinských žáků v&nbsp;přepočtu na 10&nbsp;000 žáků v&nbsp;ORP
        </title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>
          Počet ukrajinských žáků v&nbsp;přepočtu na 10&nbsp;000 žáků v&nbsp;ORP
        </h1>

        <div className={styles.legend}>
          {categories.map((category) => (
            <div key={category.color} className="legend-item">
              <span
                className="dot"
                style={{ backgroundColor: category.color }}
              ></span>
              {category.label}
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
                    {Math.round(
                      orpUkrainianPupilsById[orpId].ukrajinci_na_10000_zaku
                    )}{" "}
                    ukrajinských žáků v přepočtu na 10 000 žáků
                  </strong>
                </div>
                <div className="value-line">
                  {orpUkrainianPupilsById[orpId].ukrajinsti_zaci.toLocaleString(
                    "cs-CZ"
                  )}{" "}
                  ukrajinských žáků
                </div>
                <div className="value-line">
                  {orpUkrainianPupilsById[orpId].zaci_celkem.toLocaleString(
                    "cs-CZ"
                  )}{" "}
                  všech žáků
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
