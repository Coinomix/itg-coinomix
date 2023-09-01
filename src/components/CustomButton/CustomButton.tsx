import React from "react";
import { ButtonType } from "../../types/enums";
import classNames from "classnames";

interface Props {
  type?: ButtonType;
  text: string;
}

export const CustomButton: React.FC<Props> = ({ type, text }) => {
  return (
    <button className={classNames('custombutton', { [`${type}`]: type })}>{text}</button>
  );
};
