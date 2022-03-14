import {
  MapPage,
  getMapPageStaticProps,
} from "../catalogue/components/MapPage";

export default function FlatsMunicipal({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
