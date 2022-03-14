import React from "react";

import mapConfigs from "./_map_configs";
import MainLayout from "../layout/components/MainLayout";
import styles from "../pages_styles/Home.module.scss";

export default function Home() {
  return (
    <MainLayout mapConfigs={mapConfigs}>
      <article className={styles.container}>
        <p>
          Interaktivní mapy umožňují zobrazení podrobnějších informací po výběru
          regionu a lze je vložit do vlastních stránek (embed).
        </p>
        <p>Pokračujte výběrem mapy z navigačního menu.</p>
      </article>
    </MainLayout>
  );
}
