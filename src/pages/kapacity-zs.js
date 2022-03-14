import { MapPage, getMapPageStaticProps } from "./_map_page";

export default function CapacityElementarySchools({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
