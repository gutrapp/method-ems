import React from "react";
import { Link } from "react-router-dom";

type TestCardRootProps = {
  children: React.ReactNode;
  route: string;
};

export const TestCardRoot = ({ children, route }: TestCardRootProps) => {
  return (
    <Link to={route}>
      <div className="flex flex-row bg-black border-b border-[#bfa15e] justify-center items-center  shadow-2xl mx-[12px] mt-[8px]">
        {children}
      </div>
    </Link>
  );
};
