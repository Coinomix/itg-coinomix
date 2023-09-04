import React from "react";

interface Props {
  marginTop?: string;
}

export const Devider: React.FC<Props> = ({marginTop = "20px" }) => {

  return (
    <div style={{ marginTop }}></div>
  );
};
