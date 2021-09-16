import React, { ReactElement } from "react";
import { AppProps } from "next/app";

interface Props {}

export default function CMApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <head>
        <title>CMNextStock</title>
      </head>
      <Component {...pageProps} />
    </>
  );
}
