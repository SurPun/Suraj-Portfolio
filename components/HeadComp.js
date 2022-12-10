import React from "react";
import Head from "next/head";

export default function HeadComp({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="Portfolio" content="Portfolio" />
    </Head>
  );
}
