import React from "react";
import Card from "@/components/ui/card";
const comps = [
  "section 1",
  "section 2",
  "section 3",
  "section 4",
  "section 5",
  "section 6",
];
const component = ({ params }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {comps.map((comp, index) => {
        return <Card comp={comp} index={index} params={params} />;
      })}
    </div>
  );
};

export default component;
