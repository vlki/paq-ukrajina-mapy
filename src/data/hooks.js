import React from "react";

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

export const useOkresyData = (baseUrl) => {
  const [okresyData, setOkresyData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/okresy.topo.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setOkresyData(payload);
        });
      }
    });
  }, []);

  return okresyData;
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

export const useAccommodationData = (baseUrl) => {
  const [accommodationData, setAccommodationData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/accommodation_data.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setAccommodationData(payload);
        });
      }
    });
  }, []);

  return accommodationData;
};

export const useUkrainianPupilsData = (baseUrl) => {
  const [ukrainianPupilsData, setUkrainianPupilsData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/ukrainian_pupils_data.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setUkrainianPupilsData(payload);
        });
      }
    });
  }, []);

  return ukrainianPupilsData;
};

export const usePsychologistsData = (baseUrl) => {
  const [psychologistsData, setPsychologistsData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/psychologists_data.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setPsychologistsData(payload);
        });
      }
    });
  }, []);

  return psychologistsData;
};

export const useChildrenGroupsData = (baseUrl) => {
  const [childrenGroupsData, setChildrenGroupsData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/children_groups_data.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setChildrenGroupsData(payload);
        });
      }
    });
  }, []);

  return childrenGroupsData;
};

export const useCounsellingData = (baseUrl) => {
  const [counsellingData, setCounsellingData] = React.useState(null);

  React.useEffect(() => {
    fetch(baseUrl + "/counselling_data.json").then((response) => {
      if (response.ok) {
        response.json().then((payload) => {
          setCounsellingData(payload);
        });
      }
    });
  }, []);

  return counsellingData;
};
