import {
  MapPage,
  getMapPageStaticProps,
} from "../catalogue/components/MapPage";

export default function Accommodation({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
