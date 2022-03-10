import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedOkresyMap from "../../lib/embed/components/EmbedOkresyMap";
import { usePostMessageWithHeight } from "../../lib/embed/hooks";
import {
  useAccommodationData,
  useKrajeData,
  useOkresyData,
} from "../../lib/data/hooks";
import styles from "../../styles/Embed.module.scss";

export default function EmbedAccommodation({ baseUrl }) {
  const okresyData = useOkresyData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const accommodationData = useAccommodationData(baseUrl);
  const { containerRef } = usePostMessageWithHeight("paq-ukrajina-bydleni");

  const [selectedOkresId, setSelectedOkresId] = React.useState(null);

  const categories = [
    { label: "500 a méně", color: "#FEF0D9" },
    { label: "500–1000", color: "#C4D3C9" },
    { label: "1000–1500", color: "#79ABB0" },
    { label: "1500–2000", color: "#288893" },
    { label: "2000 a více", color: "#005B6E" },
  ];

  const fillByOkresId = React.useMemo(() => {
    if (!accommodationData) {
      return {};
    }

    const color = d3
      .scaleThreshold()
      .domain([500, 1000, 1500, 2000, 100000])
      .range(["#FEF0D9", "#C4D3C9", "#79ABB0", "#288893", "#005B6E"]);

    return accommodationData.reduce((carry, okresAccommodation) => {
      return {
        ...carry,
        [okresAccommodation.id]: color(okresAccommodation.total_beds),
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
        <title>Volná lůžka lůžek v bytech, hotelích, apod. v okresech</title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>Volná lůžka v bytech, hotelích, apod. v okresech</h1>

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
                    {okresAccommodationById[okresId].total_beds.toLocaleString(
                      "cs-CZ"
                    )}{" "}
                    volných lůžek celkem
                  </strong>{" "}
                  <span className="muted">
                    (s&nbsp;předpokladem 4&nbsp;lidí na byt)
                  </span>
                </div>
                <div className="value-line">
                  {okresAccommodationById[
                    okresId
                  ].flats_sreality.toLocaleString("cs-CZ")}{" "}
                  bytů k pronájmu{" "}
                  <span className="muted">(Sreality, začátek března 2022)</span>
                </div>
                <div className="value-line">
                  {okresAccommodationById[
                    okresId
                  ].flats_municipal.toLocaleString("cs-CZ")}{" "}
                  dostupných obecních bytů{" "}
                  <span className="muted">
                    (odhad 4&nbsp;% celkového fondu)
                  </span>
                </div>
                <div className="value-line">
                  {okresAccommodationById[okresId].hotel_beds.toLocaleString(
                    "cs-CZ"
                  )}{" "}
                  odhadovaných volných lůžek v&nbsp;hotelích apod. zařízeních{" "}
                  <span className="muted">(realitická varianta - květen)</span>
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