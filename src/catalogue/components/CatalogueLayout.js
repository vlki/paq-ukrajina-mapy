import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import groupBy from "lodash/groupBy";

import styles from "../styles/CatalogueLayout.module.scss";

export default function CatalogueLayout({ children, mapConfigs }) {
  const router = useRouter();

  const mapConfigsByCategory = groupBy(mapConfigs, "category");

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Integrace ukrajinských uprchlíků v ČR 2022+ — Interakivní mapy
        </title>
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <h1>Integrace ukrajinských uprchlíků v ČR 2022+</h1>
          </a>
        </Link>
        <p>
          Interaktivní mapy ke studii{" "}
          <a
            href="https://www.paqresearch.cz/"
            target="_blank"
            rel="noreferrer"
          >
            PAQ Research
          </a>{" "}
          a{" "}
          <a href="https://ceskepriority.cz/" target="_blank" rel="noreferrer">
            České priority
          </a>
        </p>
      </header>

      <main className={styles.main}>
        <nav className={styles.nav}>
          {Object.keys(mapConfigsByCategory).map((category) => (
            <React.Fragment key={category}>
              <h2>{category}</h2>
              <ul>
                {mapConfigsByCategory[category].map((mapConfig) => (
                  <li
                    key={mapConfig.path}
                    className={`${
                      router.pathname === mapConfig.path ? "active" : ""
                    }`}
                  >
                    <a href={router.basePath + mapConfig.path}>
                      {mapConfig.navLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </nav>

        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
