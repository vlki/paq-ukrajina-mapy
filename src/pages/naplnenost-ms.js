import {
  MapPage,
  getMapPageStaticProps,
} from "../catalogue/components/MapPage";

export default function CapacityPreSchools({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
