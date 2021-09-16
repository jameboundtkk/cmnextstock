import React, { ReactElement } from "react";
import Layout from "../components/layouts/layout";

interface Props {}

export default function Stock({}: Props): ReactElement {
  return (
    <Layout>
      <h1>Stock</h1>
    </Layout>
  );
}
