export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
} & (Person | Admin);

type Person = {
  type: "P";
  cpf: string;
  age: number;
  sex: "M" | "F";
  address: number[];
  cellphone: number[];
};

type Admin = {
  type: "A";
  role: "O" | "A";
} & (ClinicAdmin | GlobalAdmin);

type ClinicAdmin = {
  group: "C";
  clinic: number[];
};

type GlobalAdmin = {
  group: "G";
};
