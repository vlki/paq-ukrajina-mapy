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

export default function EmbedCapacityElementarySchools() {
  const orpData = useOrpData();
  const krajeData = useKrajeData();
  const capacitiesData = useCapacitiesData();
  const { containerRef } = usePostMessageWithHeight("paq-ukrajina-kapacita-zs");

  const [selectedOrpId, setSelectedOrpId] = React.useState(null);

  const fillByOrpId = React.useMemo(() => {
    if (!capacitiesData) {
      return {};
    }

    const capacityColor = d3
      .scaleLinear()
      .domain([50, 100])
      .range(["#FEF0D9", "#990F44"]);

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Naplněnost základních škol v ORP</title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>Naplněnost základních škol v&nbsp;ORP</h1>

        <div className={styles.legend}></div>

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
