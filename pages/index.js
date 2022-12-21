// Components
import HeadComp from "../components/HeadComp";
import CardComp from "../components/CardComp";
import H1 from "../components/H1";
import FooterComp from "../components/FooterComp";

export default function Home() {
  return (
    <>
      {/* Head */}
      <HeadComp title={"Portfolio"} />

      <H1 />

      <CardComp />

      <FooterComp />
    </>
  );
}
