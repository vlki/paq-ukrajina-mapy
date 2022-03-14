import {
  MapPage,
  getMapPageStaticProps,
} from "../catalogue/components/MapPage";

export default function FlatsSreality({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
