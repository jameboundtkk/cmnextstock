import React, { ReactElement } from "react";

interface Props {}

export default function index({}: Props): ReactElement {
  return <div></div>;
}

//Called in server-side
index.getInitialProps = ({ res, err }: any) => {
  res.writeHead(301, {
    location: "/login",
  });
  res.end();
  return {};
};
