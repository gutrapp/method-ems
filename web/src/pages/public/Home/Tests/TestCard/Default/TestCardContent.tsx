import React from "react";

type TestCardContentProps = {
  children: React.ReactNode;
};

export const TestCardContent = ({ children }: TestCardContentProps) => {
  return (
    <text className="text-white font-extralight flex items-center">
      {children}
    </text>
  );
};
