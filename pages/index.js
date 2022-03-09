import Head from "next/head";

import styles from "../styles/Home.module.scss";

export default function Home() {
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
                __html: createEmbedCode(embedConfig),
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
                <code>{createEmbedCode(embedConfig).trim()}</code>
              </pre>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

const embedConfigs = [
  {
    url: "/embed/kapacity-zs",
    id: "paq-ukrajina-kapacita-zs",
  },
  {
    url: "/embed/kapacity-ms",
    id: "paq-ukrajina-kapacita-ms",
  },
];

const createEmbedCode = (embedConfig) => {
  // TODO: use absolute url in production
  return `
<iframe src="${embedConfig.url}" scrolling="no" frameborder="0" allowtransparency="true" style="width: 0; min-width: 100% !important;" height="450" id="${embedConfig.id}"></iframe>
<script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["paq-ukrajina-embed-height"])for(var e in a.data["paq-ukrajina-embed-height"])if("${embedConfig.id}"==e){var d=document.querySelector("#${embedConfig.id}");d&&(d.style.height=a.data["paq-ukrajina-embed-height"][e]+"px")}});</script>
  `;
};