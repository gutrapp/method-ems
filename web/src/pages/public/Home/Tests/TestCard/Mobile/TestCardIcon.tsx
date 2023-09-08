import React from "react";

type TestCardIconProps = {
  Icon: React.ElementType;
};

export const TestCardIcon = ({ Icon }: TestCardIconProps) => {
  return (
    <div className="mr-[2px]">
      <Icon size={55} />
    </div>
  );
};
