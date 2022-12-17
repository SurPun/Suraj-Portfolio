// Components
import HeadComp from "../components/HeadComp";
import CardComp from "../components/CardComp";
import H1 from "../components/H1";

export default function Home() {
  return (
    <>
      {/* Head */}
      <HeadComp title={"Portfolio"} />

      <H1 />

      <CardComp />
    </>
  );
}
