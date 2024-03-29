import dynamic from "next/dynamic";

import "../pages_styles/globals.scss";

const Analytics = dynamic(() => import("../analytics/components/Analytics"), {
  ssr: false,
});

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default App;
