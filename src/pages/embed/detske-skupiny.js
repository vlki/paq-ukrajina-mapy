import React from "react";
import Head from "next/head";
import * as d3 from "d3";
import { keyBy } from "lodash";

import EmbedOkresyMap from "../../embed/components/EmbedOkresyMap";
import { usePostMessageWithHeight } from "../../embed/hooks";
import {
  useChildrenGroupsData,
  useKrajeData,
  useOkresyData,
} from "../../data/hooks";
import styles from "../../pages_styles/Embed.module.scss";

export default function EmbedChildrenGroups({ baseUrl }) {
  const okresyData = useOkresyData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const childrenGroupsData = useChildrenGroupsData(baseUrl);
  const { containerRef } = usePostMessageWithHeight(
    "paq-ukrajina-detske-skupiny"
  );

  const [selectedOkresId, setSelectedOkresId] = React.useState(null);

  const categories = [
    { label: "0 míst", color: "#FEF0D9" },
    { label: "1-50", color: "#C4D3C9" },
    { label: "50–100", color: "#79ABB0" },
    { label: "100–200", color: "#288893" },
    { label: "200 a více míst", color: "#005B6E" },
  ];

  const fillByOkresId = React.useMemo(() => {
    if (!childrenGroupsData) {
      return {};
    }

    const color = d3
      .scaleThreshold()
      .domain([1, 50, 100, 200, 100000])
      .range(["#FEF0D9", "#C4D3C9", "#79ABB0", "#288893", "#005B6E"]);

    return childrenGroupsData.reduce((carry, okresChildrenGroups) => {
      return {
        ...carry,
        [okresChildrenGroups.id]: color(
          okresChildrenGroups.kapacita !== undefined
            ? okresChildrenGroups.kapacita
            : 0
        ),
      };
    }, {});
  }, [childrenGroupsData]);

  const okresChildrenGroupsById = React.useMemo(
    () => keyBy(childrenGroupsData, "id"),
    [childrenGroupsData]
  );

  if (!okresyData || !krajeData || !childrenGroupsData) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Kapacita dětských skupin v&nbsp;okresech</title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>Kapacita dětských skupin v&nbsp;okresech</h1>

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
                    {okresChildrenGroupsById[okresId] !== undefined ? (
                      <>
                        {okresChildrenGroupsById[
                          okresId
                        ].kapacita.toLocaleString("cs-CZ")}{" "}
                        míst v&nbsp;dětských skupinách
                      </>
                    ) : (
                      <>0 míst v&nbsp;dětských skupinách</>
                    )}
                  </strong>{" "}
                  <span className="muted">
                    (obsazených i&nbsp;neobsazených)
                  </span>
                </div>
                <div className="value-line">
                  {(okresChildrenGroupsById[okresId] !== undefined
                    ? okresChildrenGroupsById[okresId].pocet_detskych_skupin
                    : 0
                  ).toLocaleString("cs-CZ")}{" "}
                  dětských skupin
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
