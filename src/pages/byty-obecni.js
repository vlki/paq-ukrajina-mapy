import { MapPage, getMapPageStaticProps } from "./_map_page";

export default function FlatsMunicipal({ baseUrl }) {
  return <MapPage baseUrl={baseUrl} />;
}

export async function getStaticProps() {
  return getMapPageStaticProps();
}
