// Components
import HeadComp from "../components/HeadComp";
import CardComp from "../components/CardComp";
import H1 from "../components/H1";
import FooterComp from "../components/FooterComp";
import NavComp from "../components/NavComp";

export default function Home() {
  return (
    <>
      {/* Head */}
      <HeadComp title={"Portfolio"} />

      <NavComp />

      <H1 />

      <CardComp />

      <FooterComp />
    </>
  );
}
