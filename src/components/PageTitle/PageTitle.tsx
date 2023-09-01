import React from "react";
import { Link } from "gatsby";


interface Props {
  title: string;
  breadcrumbsTitle: string;
  breadcrumbsUrl?: string;
};

export const PageTitle: React.FC <Props> = ({
  title,
  breadcrumbsTitle,
  breadcrumbsUrl = '',
}) => {
  return (
    <div className="main__header">
      <div className="main__breadcrumbs">
        <Link to={`/${breadcrumbsUrl}`} className="main__breadcrumbs-link">&lt; {breadcrumbsTitle}</Link>
      </div>
      <h1 className="main__title">{title}</h1>
  </div>
  );
};
