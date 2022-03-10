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
            <div style={{ flex: "1 0 0px" }}>
              <pre
                style={{
                  backgroundColor: "#eee",
                  whiteSpace: "break-spaces",
                  wordBreak: "break-word",
                  margin: 0,
                  padding: 10,
                }}
              >
                <code>{createEmbedCode(embedConfig, baseUrl).trim()}</code>
              </pre>
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
    id: "paq-ukrajina-kapacita-zs",
  },
  {
    src: "/embed/kapacity-ms",
    id: "paq-ukrajina-kapacita-ms",
  },
  {
    src: "/embed/bydleni",
    id: "paq-ukrajina-bydleni",
  },
];

const createEmbedCode = (embedConfig, baseUrl) => {
  const src = baseUrl + embedConfig.src;

  return `
<iframe src="${src}" scrolling="no" frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;" height="450" id="${embedConfig.id}"></iframe>
<script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["paq-ukrajina-embed-height"])for(var e in a.data["paq-ukrajina-embed-height"])if("${embedConfig.id}"==e){var d=document.querySelector("#${embedConfig.id}");d&&(d.style.height=a.data["paq-ukrajina-embed-height"][e]+"px")}});</script>
  `;
};
