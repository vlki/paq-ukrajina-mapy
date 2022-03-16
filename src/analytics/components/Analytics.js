import React from "react";
import Script from "next/script";

const Analytics = () => {
  return window.location.host === "vlki.github.io" ? (
    <Script
      data-domain="vlki.github.io"
      src="https://plausible.io/js/plausible.js"
    />
  ) : null;
};

export default Analytics;
