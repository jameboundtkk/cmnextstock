import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../../components/layouts/layout";
import { Guid } from "guid-typescript";

interface Props {
  data: Guid;
}

export default function edit({ data }: Props): ReactElement {
  return (
    <Layout>
      <h1>Edit</h1>
      <span>{JSON.stringify(data)}</span>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { data: context.query.id.toString() },
  };
};
