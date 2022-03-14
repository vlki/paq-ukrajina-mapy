import {
  MapPage,
  getMapPageStaticProps,
} from "../catalogue/components/MapPage";

export default function Psychologists({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
