import React from "react";

type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[80%] m-auto ">
      <h1 className="text-2xl lg:text-3xl font-bold text-white">{heading}</h1>
      <p className="text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200">
        Trust matters. We uphold transparency and integrity in every project,
        ensuring reliable results without compromise.
      </p>
    </div>
  );
};

export default SectionHeading;
