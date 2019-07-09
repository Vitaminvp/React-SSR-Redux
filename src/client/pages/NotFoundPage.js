import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <div>404</div>;
};

export default { component: NotFoundPage };
