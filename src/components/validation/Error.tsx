import React from "react";

const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-center rounded-md text-white my-4 bg-red-600">
      {" "}
      {children}{" "}
    </p>
  );
};

export default Error;
