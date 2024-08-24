import React from "react";
import Card from "@/components/ui/card";

const comps = [
  "component 1",
  "component 2",
  "component 3",
  "component 4",
  "component 5",
  "component 6",
];

const Components = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {comps.map((comp, index) => {
        return <Card key={comp} comp={comp} index={index} params="" />;
      })}
    </div>
  );
};

export default Components;
