import React from "react";

interface Props {
  id?: string;
}

export const CardNews: React.FC<Props> = ({
  id = "cardnews",
}) => {
  return (
    <div className="cardnews">
      <div className="cardnews__container"></div>
    </div>
  );
};
