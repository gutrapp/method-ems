import React from "react";

type FooterIconsProps = {
  children: React.ReactNode;
};

export const FooterIcons = ({ children }: FooterIconsProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-[20px] gap-y-[20px] p-8 xl:flex xl:flex-row xl:justify-around pt-[10px]">
      {children}
    </div>
  );
};
