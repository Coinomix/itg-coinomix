import React from "react";
import { ButtonType } from "../../types/enums";

interface Props {
  type?: ButtonType;
}

export const CustomButton: React.FC<Props> = ({ type = ButtonType.signin }) => {
  return (
    <button className={type} />
  );
};
