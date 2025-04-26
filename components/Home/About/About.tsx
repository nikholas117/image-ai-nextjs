import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <Image
            src="/images/about.jpg"
            alt="about"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        {/* content */}
        <div className="order-1 xl:order-2">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
            What we do
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Create your own AI Business easily.
          </h1>
          <p className="text-gray-200 mb-8 text-base">
            Our team delivers exceptional service tailored to your needs.
            Whether you're scaling up or refining operations, we combine
            expertise with cutting-edge solutions to drive your success.
          </p>
          <Button
            className="bg-cyan-700 hover:bg-cyan-300 w-36 h-12 text-base uppercase"
            size={"lg"}
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
