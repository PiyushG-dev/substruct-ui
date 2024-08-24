import React from "react";

const component = ({ params }) => {
  return <div className="pt-10">This is the {params.slug} component</div>;
};

export default component;
