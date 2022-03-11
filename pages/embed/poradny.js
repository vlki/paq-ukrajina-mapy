import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedKrajeMap from "../../lib/embed/components/EmbedKrajeMap";
import { usePostMessageWithHeight } from "../../lib/embed/hooks";
import { useCounsellingData, useKrajeData } from "../../lib/data/hooks";
import styles from "../../styles/Embed.module.scss";

export default function EmbedCounselling({ baseUrl }) {
  const krajeData = useKrajeData(baseUrl);
  const counsellingData = useCounsellingData(baseUrl);
  const { containerRef } = usePostMessageWithHeight("paq-ukrajina-poradny");

  const [selectedKrajId, setSelectedKrajId] = React.useState(null);

  const categories = [
    { label: "250 a méně", color: "#FEF0D9" },
    { label: "250–275", color: "#C4D3C9" },
    { label: "275–300", color: "#79ABB0" },
    { label: "300–325", color: "#288893" },
    { label: "325 a více", color: "#005B6E" },
  ];

  const fillByKrajId = React.useMemo(() => {
    if (!counsellingData) {
      return {};
    }

    const color = d3
      .scaleThreshold()
      .domain([250, 275, 300, 325, 10000])
      .range(["#FEF0D9", "#C4D3C9", "#79ABB0", "#288893", "#005B6E"]);

    return counsellingData.reduce((carry, krajCounselling) => {
      return {
        ...carry,
        [krajCounselling.id]: color(krajCounselling.zlomek),
      };
    }, {});
  }, [counsellingData]);

  const krajCounsellingById = React.useMemo(
    () => keyBy(counsellingData, "id"),
    [counsellingData]
  );

  if (!krajeData || !counsellingData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Počet případů na pedagogického pracovníka poradny v&nbsp;krajích
        </title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>
          Počet případů na pedagogického pracovníka poradny v&nbsp;krajích
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
          <EmbedKrajeMap
            krajeData={krajeData}
            selectedKrajId={selectedKrajId}
            setSelectedKrajId={setSelectedKrajId}
            fillByKrajId={fillByKrajId}
            renderTooltipContent={(krajId, feature) => (
              <div className={styles.tooltipContent}>
                <div className="tooltip-orp">
                  <div className="tooltip-orp-name">
                    {feature.properties.NAZEV}
                  </div>
                </div>

                <div className="main-value-line">
                  <strong>
                    {Math.round(krajCounsellingById[krajId].zlomek)} případů na
                    jednoho pedagogického pracovníka poradny
                  </strong>
                </div>
                <div className="value-line">
                  {krajCounsellingById[krajId].pripadu.toLocaleString("cs-CZ")}{" "}
                  případů celkem
                </div>
                <div className="value-line">
                  {krajCounsellingById[krajId].pedagogu.toLocaleString("cs-CZ")}{" "}
                  úvazků pedagogických pracovníků poraden
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
