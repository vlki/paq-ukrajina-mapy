import {
  MapPage,
  getMapPageStaticProps,
} from "../catalogue/components/MapPage";

export default function UkrainianPupils({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
