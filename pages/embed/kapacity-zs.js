import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedMap from "../../lib/embed/components/EmbedMap";
import {
  useCapacitiesData,
  useKrajeData,
  useOrpData,
  usePostMessageWithHeight,
} from "../../lib/embed/hooks";
import styles from "../../styles/Embed.module.scss";

export default function EmbedCapacityElementarySchools({ baseUrl }) {
  const orpData = useOrpData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const capacitiesData = useCapacitiesData(baseUrl);
  const { containerRef } = usePostMessageWithHeight("paq-ukrajina-kapacita-zs");

  const [selectedOrpId, setSelectedOrpId] = React.useState(null);

  const categories = [
    { label: "0-60 %", color: "#FEF0D9" },
    { label: "60-70 %", color: "#F5CAC1" },
    { label: "70-80 %", color: "#DF8B97" },
    { label: "80-90 %", color: "#C0516E" },
    { label: "90-100 %", color: "#990F44" },
  ];

  const fillByOrpId = React.useMemo(() => {
    if (!capacitiesData) {
      return {};
    }

    const capacityColor = d3
      .scaleThreshold()
      .domain([60, 70, 80, 90, 100])
      .range(["#FEF0D9", "#F5CAC1", "#DF8B97", "#C0516E", "#990F44"]);

    return capacitiesData.reduce((carry, orpCapacity) => {
      return {
        ...carry,
        [orpCapacity.id]: capacityColor(orpCapacity.zs_naplnenost_22),
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
        <title>Naplněnost základních škol v ORP</title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>Naplněnost základních škol v&nbsp;ORP</h1>

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

        <EmbedMap
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
                  {Math.round(orpCapacityById[orpId].zs_naplnenost_22)} %{" "}
                  naplněnost ZŠ
                </strong>
              </div>
              <div className="value-line">
                {orpCapacityById[orpId].zs_kapacita.toLocaleString("cs-CZ")}{" "}
                celkem míst v ZŠ
              </div>
              <div className="value-line">
                {orpCapacityById[orpId].volna_mista_zs.toLocaleString("cs-CZ")}{" "}
                volných míst
              </div>
              <div className="value-line">
                {orpCapacityById[orpId].pocet_zs.toLocaleString("cs-CZ")}{" "}
                základních škol
              </div>
            </div>
          )}
        />

        <div className={styles.footer}>
          <div className="footer-item">
            Zdroj:{" "}
            <a
              href="https://www.paqresearch.cz/"
              target="_blank"
              rel="noreferrer"
            >
              PAQ&nbsp;Research
            </a>
          </div>
          <span className="footer-separator">·</span>
          <div className="footer-item">
            Mapa:{" "}
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
