import React from "react";
import classNames from "classnames";
import { CardTags } from "../CardTags";
// import favoriteIcon from "../../assets/images/favorite.svg";
// import commentIcon from "../../assets/images/comment.svg";
// import regroupIcon from "../../assets/images/regroup.svg";
import { CardNewsType } from "../../type/CardNewsType";

interface Props {
  imgUrl?: string;
  type?: CardNewsType;
}

export const CardNews: React.FC<Props> = ({
  imgUrl = '',
  type,
}) => { 
  return (
    <div className="cardnews" style={{ height: type }}>
      {imgUrl && (
        <img 
          src={imgUrl} 
          className="cardnews__image"
        />
      )}
      <div className="cardnews__content">
        <div className="cardnews__head">
          <CardTags />

          <div className={classNames('cardnews__title', {
          'cardnews__title-top': type === CardNewsType.top,
        })}> 

            <a href="/" className="cardnews__title-link">
              Bitcoin offshore and the end of mining: how the world of cryptocurrencies is changing in 2023
            </a>
          </div>
        </div>  

        <div className="cardnews__footer">
          <div className="cardnews__author">
            <a href="/" className="cardnews__author-link">by Chris Moore</a>
            <p className="cardnews__author-date">January 2, 2023</p>
            <p className="cardnews__author-date">9:00 AM GMT</p>
          </div>

          {/* {type === CardNewsType.top && (
            <div className="cardnews__social">
              <div className="cardnews__social-content">
                <img src={favoriteIcon} className="cardnews__icon"/>
                27.7K Likes
              </div>
              <div className="cardnews__social-content">
                <img src={commentIcon} className="cardnews__icon"/>
                148 Comments
              </div>
              <div className="cardnews__social-content">
                <img src={regroupIcon} className="cardnews__icon"/>
                1.4K Repost
              </div>
            </div>
          )
            } */}

        </div>
      </div>
    </div>
  );
};
