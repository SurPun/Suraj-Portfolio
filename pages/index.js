import Image from "next/image";

// Components
import HeadComp from "../components/HeadComp";

export default function Home() {
  return (
    <>
      {/* Head */}
      <HeadComp title={"SP | Portfolio"} />

      <h1 className="text-5xl font-bold">Hello World</h1>
    </>
  );
}
