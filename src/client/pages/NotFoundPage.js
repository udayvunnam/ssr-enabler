import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Oops, the page is not available</h1>;
};

export default {
  component: NotFoundPage
};
