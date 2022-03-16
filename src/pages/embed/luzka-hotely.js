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

export default function EmbedHotelBeds({ baseUrl }) {
  const okresyData = useOkresyData(baseUrl);
  const krajeData = useKrajeData(baseUrl);
  const accommodationData = useAccommodationData(baseUrl);
  const { containerRef } = usePostMessageWithHeight(
    "paq-ukrajina-luzka-hotely"
  );

  const [selectedOkresId, setSelectedOkresId] = React.useState(null);

  const categories = [
    { label: "100 a méně", color: "#FEF0D9" },
    { label: "100–250", color: "#C4D3C9" },
    { label: "250–500", color: "#79ABB0" },
    { label: "500–1000", color: "#288893" },
    { label: "1000 a více", color: "#005B6E" },
  ];

  const fillByOkresId = React.useMemo(() => {
    if (!accommodationData) {
      return {};
    }

    const color = d3
      .scaleThreshold()
      .domain([100, 250, 500, 1000, 100000])
      .range(["#FEF0D9", "#C4D3C9", "#79ABB0", "#288893", "#005B6E"]);

    return accommodationData.reduce((carry, okresAccommodation) => {
      return {
        ...carry,
        [okresAccommodation.id]: color(okresAccommodation.hotel_beds),
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
          Odhadovaná volná lůžka v&nbsp;hotelích apod. zařízeních
          v&nbsp;okresech (realistická varianta —&nbsp;květen)
        </title>
      </Head>

      <main className={styles.container} ref={containerRef}>
        <h1>
          Odhadovaná volná lůžka v&nbsp;hotelích apod. zařízeních
          v&nbsp;okresech (realistická varianta —&nbsp;květen)
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
                    {okresAccommodationById[okresId].hotel_beds.toLocaleString(
                      "cs-CZ"
                    )}{" "}
                    odhadovaných volných lůžek v&nbsp;hotelích apod. zařízeních
                  </strong>{" "}
                  <span className="muted">(realitická varianta - květen)</span>
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
