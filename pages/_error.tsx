import React, { ReactElement } from "react";
import Router from "next/router";

interface Props {
  statusCode: string;
}

//Called in client-side
export default function Error({ statusCode }: Props): ReactElement {
  React.useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 2000);
  });

  return (
    <div>
      <h1>Error {statusCode}</h1>
    </div>
  );
}

//Called in server-side
Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
  //   if (statusCode == 404) {
  //     res.writeHead(301, { location: "/" });
  //     res.end();
  //     return {};
  //   } else {
  //     return { statusCode };
  //   }
};
