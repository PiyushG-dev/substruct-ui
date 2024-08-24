import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";
const comps = [
  "component 1",
  "component 2",
  "component 3",
  "component 4",
  "component 5",
  "component 6",
];
const component = ({ params }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {comps.map((comp) => {
        return (
          <div key={comp} className="flex flex-col gap-3">
            <div className="h-52">
              <Image
                src={placeholder}
                alt="placeholder-image"
                className="h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-sm">
                {params.slug} {comp}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default component;
