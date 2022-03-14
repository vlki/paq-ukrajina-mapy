import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedOrpMap from "../../embed/components/EmbedOrpMap";
import { usePostMessageWithHeight } from "../../embed/hooks";
import { useCapacitiesData, useKrajeData, useOrpData } from "../../data/hooks";
import styles from "../../pages_styles/Embed.module.scss";

export default function EmbedCapacityPreschools({ baseUrl }) {
  const orpData = useOrpData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const capacitiesData = useCapacitiesData(baseUrl);
  const { containerRef } = usePostMessageWithHeight("paq-ukrajina-kapacity-ms");

  const [selectedOrpId, setSelectedOrpId] = React.useState(null);

  const categories = [
    { label: "0–60 %", color: "#FEF0D9" },
    { label: "60–70 %", color: "#C4D3C9" },
    { label: "70–80 %", color: "#79ABB0" },
    { label: "80–90 %", color: "#288893" },
    { label: "90–100 %", color: "#005B6E" },
  ];

  const fillByOrpId = React.useMemo(() => {
    if (!capacitiesData) {
      return {};
    }

    const capacityColor = d3
      .scaleThreshold()
      .domain([60, 70, 80, 90, 100])
      .range(["#FEF0D9", "#C4D3C9", "#79ABB0", "#288893", "#005B6E"]);

    return capacitiesData.reduce((carry, orpCapacity) => {
      return {
        ...carry,
        [orpCapacity.id]: capacityColor(orpCapacity.ms_naplnenost_22),
      };
    }, {});
  }, [capacitiesData]);

  const orpCapacityById = React.useMemo(
    () => keyBy(capacitiesData, "id"),
    [capacitiesData]
  );

  if (!orpData || !krajeData || !capacitiesData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Naplněnost mateřských škol v ORP</title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>Naplněnost mateřských škol v&nbsp;ORP</h1>

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
                    {Math.round(orpCapacityById[orpId].ms_naplnenost_22)} %{" "}
                    naplněnost MŠ
                  </strong>
                </div>
                <div className="value-line">
                  {orpCapacityById[orpId].ms_kapacita.toLocaleString("cs-CZ")}{" "}
                  celkem míst v MŠ
                </div>
                <div className="value-line">
                  {orpCapacityById[orpId].volna_mista_ms.toLocaleString(
                    "cs-CZ"
                  )}{" "}
                  volných míst
                </div>
                <div className="value-line">
                  {orpCapacityById[orpId].pocet_ms.toLocaleString("cs-CZ")}{" "}
                  mateřských škol
                </div>
              </div>
            )}
          />
        </div>

        <div className={styles.footer}>
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
