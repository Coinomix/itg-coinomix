import React from "react";
import "./CardBanner.scss";
import { Link } from "gatsby";

interface Props {
  imgUrl?: string;
  height?: string;
  link: string;
}

export const CardBanner: React.FC<Props> = ({ 
  imgUrl,
  height,
  link
}) => {
  return (
    <div className="cardbanner" style={{ height }}>
      {imgUrl && (
        <Link to={`https://${link}`}>
          <img
            src={imgUrl}
            className="cardbanner__image"
          />
        </Link>
      )}
    </div>
  );
};
