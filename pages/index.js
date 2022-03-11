import Head from "next/head";

import styles from "../styles/Home.module.scss";

export default function Home({ baseUrl }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>PAQ Research / Ukrajina / Mapy</title>
      </Head>

      <main className={styles.main}>
        <h1>PAQ Research / Ukrajina / Mapy</h1>

        {embedConfigs.map((embedConfig) => (
          <div
            key={embedConfig.id}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "50px 0",
            }}
          >
            <div
              style={{ flex: "1 0 0px", marginRight: 30 }}
              dangerouslySetInnerHTML={{
                __html: createEmbedCode(embedConfig, baseUrl),
              }}
            ></div>
            <div style={{ flex: "1 0 0px", background: "#eee", padding: 20 }}>
              <h2 style={{ marginTop: 0 }}>
                Kód k vložení do vlastních stránek
              </h2>

              <pre
                style={{
                  backgroundColor: "#fff",
                  whiteSpace: "break-spaces",
                  wordBreak: "break-word",
                  margin: 0,
                  padding: 10,
                }}
              >
                <code>{createEmbedCode(embedConfig, baseUrl).trim()}</code>
              </pre>

              <h2>Ke stažení</h2>

              <a
                href={baseUrl + "/" + embedConfig.id + ".png"}
                download
                className={styles.downloadLink}
              >
                Stáhnout jako .png
              </a>
            </div>
          </div>
        ))}
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

const embedConfigs = [
  {
    src: "/embed/kapacity-zs",
    id: "paq-ukrajina-kapacity-zs",
  },
  {
    src: "/embed/kapacity-ms",
    id: "paq-ukrajina-kapacity-ms",
  },
  {
    src: "/embed/bydleni",
    id: "paq-ukrajina-bydleni",
  },
  {
    src: "/embed/byty-sreality",
    id: "paq-ukrajina-byty-sreality",
  },
  {
    src: "/embed/byty-obecni",
    id: "paq-ukrajina-byty-obecni",
  },
  {
    src: "/embed/luzka-hotely",
    id: "paq-ukrajina-luzka-hotely",
  },
  {
    src: "/embed/ukrajinsti-zaci",
    id: "paq-ukrajina-ukrajinsti-zaci",
  },
  {
    src: "/embed/psychologove",
    id: "paq-ukrajina-psychologove",
  },
];

const createEmbedCode = (embedConfig, baseUrl) => {
  const src = baseUrl + embedConfig.src;

  return `
<iframe src="${src}" scrolling="no" frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;" height="450" id="${embedConfig.id}"></iframe>
<script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["paq-ukrajina-embed-height"])for(var e in a.data["paq-ukrajina-embed-height"])if("${embedConfig.id}"==e){var d=document.querySelector("#${embedConfig.id}");d&&(d.style.height=a.data["paq-ukrajina-embed-height"][e]+"px")}});</script>
  `;
};
