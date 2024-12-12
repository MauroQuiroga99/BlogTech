import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-40 bg-gray-900  w-full flex justify-center ">
        <div className="flex  w-[1000px] items-center gap-8  ">
          <div className="flex justify-start gap-8 ">
            <div className="text-base tracking-wider leading-4 font-medium text-gray-300 not-italic hover:text-blue-800 transition-colors">
              Algún texto{" "}
            </div>
            <div className="text-base tracking-wider leading-4 font-medium text-gray-300 not-italic hover:text-blue-800 transition-colors">
              Algún texto{" "}
            </div>
            <div className="text-base tracking-wider leading-4 font-medium text-gray-300 not-italic hover:text-blue-800 transition-colors">
              Algún texto{" "}
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-lg text-gray-300 font-bold">BLOGTECH</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
