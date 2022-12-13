// Components
import HeadComp from "../components/HeadComp";
import CardComp from "../components/CardComp";

export default function Home() {
  return (
    <>
      {/* Head */}
      <HeadComp title={"Portfolio"} />

      <CardComp />
    </>
  );
}
