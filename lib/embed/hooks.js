import React from "react";
import { debounce } from "lodash";

export const useOrpData = (baseUrl) => {
  const [orpData, setOrpData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/orp.topo.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setOrpData(payload);
        });
      }
    });
  }, []);

  return orpData;
};

export const useKrajeData = (baseUrl) => {
  const [krajeData, setKrajeData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/kraje.topo.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setKrajeData(payload);
        });
      }
    });
  }, []);

  return krajeData;
};

export const useCapacitiesData = (baseUrl) => {
  const [capacitiesData, setCapacitiesData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/capacities_data.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setCapacitiesData(payload);
        });
      }
    });
  }, []);

  return capacitiesData;
};

export const usePostMessageWithHeight = (id) => {
  const containerRef = React.useRef(null);

  const postHeightMessage = React.useCallback(() => {
    if (containerRef.current) {
      const { height } = containerRef.current.getBoundingClientRect();
      if (window.parent) {
        window.parent.postMessage(
          {
            "paq-ukrajina-embed-height": {
              [id]: height,
            },
          },
          "*"
        );
      }
    }
  }, [id]);

  const onResize = React.useCallback(
    debounce(() => {
      postHeightMessage();
      setTimeout(() => postHeightMessage(), 1000);
      setTimeout(() => postHeightMessage(), 5000);
    }, 50),
    [postHeightMessage]
  );

  React.useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return {
    containerRef,
  };
};
