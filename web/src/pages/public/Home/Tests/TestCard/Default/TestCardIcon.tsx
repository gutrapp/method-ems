import React from "react";

type TestCardIconProps = {
  Icon: React.ElementType;
};

export const TestCardIcon = ({ Icon }: TestCardIconProps) => {
  return (
    <div className="mr-2">
      <Icon size={175} />
    </div>
  );
};
