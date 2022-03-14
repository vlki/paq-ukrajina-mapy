import { useRouter } from "next/router";

import CatalogueLayout from "./CatalogueLayout";
import mapConfigs from "../mapConfigs";
import styles from "../styles/MapPage.module.scss";

const MapPage = ({ baseUrl }) => {
  const router = useRouter();

  const mapConfig = mapConfigs.find(
    (config) => config.path === router.pathname
  );

  return (
    <CatalogueLayout mapConfigs={mapConfigs}>
      <article className={styles.container}>
        <div
          dangerouslySetInnerHTML={{
            __html: createEmbedCode(mapConfig, baseUrl),
          }}
        ></div>

        <h2>Kód k vložení do vlastních stránek</h2>

        <pre className={styles.pre}>
          <code>{createEmbedCode(mapConfig, baseUrl).trim()}</code>
        </pre>

        <h2>Ke stažení</h2>

        <a
          href={baseUrl + "/" + mapConfig.embedId + ".png"}
          download
          className={styles.downloadLink}
        >
          Stáhnout jako .png
        </a>
      </article>
    </CatalogueLayout>
  );
};

const createEmbedCode = (mapConfig, baseUrl) => {
  const iframeSrc = baseUrl + mapConfig.embedSrc;

  return `
<iframe src="${iframeSrc}" scrolling="no" frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;" height="450" id="${mapConfig.embedId}"></iframe>
<script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["paq-ukrajina-embed-height"])for(var e in a.data["paq-ukrajina-embed-height"])if("${mapConfig.embedId}"==e){var d=document.querySelector("#${mapConfig.embedId}");d&&(d.style.height=a.data["paq-ukrajina-embed-height"][e]+"px")}});</script>
  `;
};

const getMapPageStaticProps = async () => {
  return {
    props: {
      baseUrl:
        process.env.NODE_ENV === "production"
          ? "https://vlki.github.io/paq-ukrajina-mapy"
          : "",
    },
  };
};

export { MapPage, getMapPageStaticProps };
