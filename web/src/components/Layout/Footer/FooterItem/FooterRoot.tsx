import React from "react";

type FooterItemRootProps = {
  children: React.ReactNode;
};

export const FooterItemRoot = ({ children }: FooterItemRootProps) => {
  return (
    <main className="flex items-center w-min gap-x-[2px] xl:text-4xl text-lg hover:cursor-pointer">
      {children}
    </main>
  );
};
