import React from "react";

type MethodRootProps = {
  children: React.ReactNode;
};

export const MethodRoot = ({ children }: MethodRootProps) => {
  return (
    <div className="opacity-80 xl:p-5 flex flex-col justify-between">
      {children}
    </div>
  );
};
