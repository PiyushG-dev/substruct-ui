import React from "react";

const component = ({ params }) => {
  return <div className="pt-10">This is the {params.slug} section</div>;
};

export default component;
