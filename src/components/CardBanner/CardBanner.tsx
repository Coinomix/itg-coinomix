import React from "react";

interface Props {
  imgUrl?: string;
  height?: string;
}

export const CardBanner: React.FC<Props> = ({ imgUrl, height }) => {
  return (
    <div className="cardbanner" style={{ height }}>
      {imgUrl && (
        <img 
          src={imgUrl} 
          className="cardbanner__image"
        />
      )}
    </div>
  );
};
