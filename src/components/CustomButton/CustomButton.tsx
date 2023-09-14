import React from "react";
import classNames from "classnames";
import "./CustomButton.scss";
import { ButtonType } from "../../types/enums";
import testImg from "../../assets/images/google_icon.svg";

interface Props {
  type?: ButtonType;
  text: string;
}

export const CustomButton: React.FC<Props> = ({ type, text }) => {
  return (
      <button className={classNames('custombutton', { [`${type}`]: type })}>
        {(type === ButtonType.google || type === ButtonType.apple) && (
          <div className={classNames({ [`${type}-image`]: type })} />
        )}
        {text}
      </button>
  );
};
