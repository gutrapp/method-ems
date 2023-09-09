import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  choices: { nome: string; tipo: string }[];
}

export const Select = ({ choices, ...props }: SelectProps) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className="rounded-3xl pt-2 px-4 py-2 text-black"
    >
      {choices.map(({ nome, tipo }, i) => (
        <option key={i} value={tipo}>
          {nome}
        </option>
      ))}
    </select>
  );
};
