import React from "react";

type MethodContentProps = {
  children: React.ReactNode;
};

export const MethodContent = ({ children }: MethodContentProps) => {
  return (
    <text className="text-white xl:pt-2 opacity-100 xl:text-xl text-[13px] font-light">
      {children}
    </text>
  );
};
