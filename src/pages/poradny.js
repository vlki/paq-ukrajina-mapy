import { MapPage, getMapPageStaticProps } from "./_map_page";

export default function Counselling({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
