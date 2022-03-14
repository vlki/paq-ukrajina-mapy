import React from "react";

import mapConfigs from "../catalogue/mapConfigs";
import CatalogueLayout from "../catalogue/components/CatalogueLayout";
import styles from "../pages_styles/Home.module.scss";

export default function Home() {
  return (
    <CatalogueLayout mapConfigs={mapConfigs}>
      <article className={styles.container}>
        <p>
          Interaktivní mapy umožňují zobrazení podrobnějších informací po výběru
          regionu a lze je vložit do vlastních stránek (embed).
        </p>
        <p>Pokračujte výběrem mapy z navigačního menu.</p>
      </article>
    </CatalogueLayout>
  );
}
