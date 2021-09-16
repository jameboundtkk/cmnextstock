import React, { ReactElement } from "react";

interface Props {
  styleCss?: React.CSSProperties;
}

export default function Footer({ styleCss }: Props): ReactElement {
  return (
    <div style={styleCss}>
      <span style={{ paddingLeft: 240 }}>
        Copyright © 2021 cmnextstock Co.,Ltd. All Rights Reserved
      </span>
    </div>
  );
}
