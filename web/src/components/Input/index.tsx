import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon: React.ElementType;
  label: string;
}

export const Input = ({ Icon, label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col pb-2 xl:2xl">
      <div className="flex shadow-2xl">
        <Icon className="xl:mt-[6px] xl:mr-1 mt-1 mr-[2px] pb-[2px]" />
        <h1>{label}:</h1>
      </div>
      <input
        {...props}
        className="px-2 rounded-3xl outline-none shadow-2xl text-black xl:px-2 xl:py-1 duration-300 xl:border-b-2 border-solid focus:border-b-[#bfa15e] border-white"
      />
    </div>
  );
};
