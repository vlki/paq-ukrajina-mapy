import {
  MapPage,
  getMapPageStaticProps,
} from "../catalogue/components/MapPage";

export default function ChildrenGroups({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
