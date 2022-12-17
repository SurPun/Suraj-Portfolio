// Components
import HeadComp from "../components/HeadComp";
import CardComp from "../components/CardComp";
import Head1 from "../components/Head1";

export default function Home() {
  return (
    <>
      {/* Head */}
      <HeadComp title={"Portfolio"} />

      <Head1 />

      <CardComp />
    </>
  );
}
