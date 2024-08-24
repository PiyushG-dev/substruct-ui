import React from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.webp";
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
