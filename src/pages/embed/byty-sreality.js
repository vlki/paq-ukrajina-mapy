import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedOkresyMap from "../../embed/components/EmbedOkresyMap";
import { usePostMessageWithHeight } from "../../embed/hooks";
import {
  useAccommodationData,
  useKrajeData,
  useOkresyData,
} from "../../data/hooks";
import styles from "../../pages_styles/Embed.module.scss";

export default function EmbedFlatsSreality({ baseUrl }) {
  const okresyData = useOkresyData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const accommodationData = useAccommodationData(baseUrl);
  const { containerRef } = usePostMessageWithHeight(
    "paq-ukrajina-byty-sreality"
  );

  const [selectedOkresId, setSelectedOkresId] = React.useState(null);

  const categories = [
    { label: "25 a méně", color: "#FEF0D9" },
    { label: "25–50", color: "#C4D3C9" },
    { label: "50–100", color: "#79ABB0" },
    { label: "100–200", color: "#288893" },
    { label: "200 a více", color: "#005B6E" },
  ];

  const fillByOkresId = React.useMemo(() => {
    if (!accommodationData) {
      return {};
    }

    const color = d3
      .scaleThreshold()
      .domain([25, 50, 100, 200, 100000])
      .range(["#FEF0D9", "#C4D3C9", "#79ABB0", "#288893", "#005B6E"]);

    return accommodationData.reduce((carry, okresAccommodation) => {
      return {
        ...carry,
        [okresAccommodation.id]: color(okresAccommodation.flats_sreality),
      };
    }, {});
  }, [accommodationData]);

  const okresAccommodationById = React.useMemo(
    () => keyBy(accommodationData, "id"),
    [accommodationData]
  );

  if (!okresyData || !krajeData || !accommodationData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Byty k pronájmu na Sreality.cz v okresech (začátek března 2022)
        </title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>
          Byty k&nbsp;pronájmu na&nbsp;Sreality.cz v&nbsp;okresech (začátek
          března 2022)
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
          <EmbedOkresyMap
            okresyData={okresyData}
            krajeData={krajeData}
            selectedOkresId={selectedOkresId}
            setSelectedOkresId={setSelectedOkresId}
            fillByOkresId={fillByOkresId}
            renderTooltipContent={(okresId, feature) => (
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
                    {okresAccommodationById[
                      okresId
                    ].flats_sreality.toLocaleString("cs-CZ")}{" "}
                    bytů k pronájmu
                  </strong>{" "}
                  <span className="muted">
                    (Sreality.cz, začátek března 2022)
                  </span>
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
