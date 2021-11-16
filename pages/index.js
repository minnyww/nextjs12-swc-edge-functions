import { useEffect } from "react";

export const getServerSideProps = ({ query }) => {
  console.log("query :: ", query);
  return {
    props: query,
  };
};

export default function Home() {
  useEffect(() => {
    const JSON_URL =
      "https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json";

    const fetchData = async () => {
      const req = await fetch(JSON_URL);
      const countriesData = await req.json();
      console.log("countriesData : ", countriesData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Middle ware</h2>
    </div>
  );
}
