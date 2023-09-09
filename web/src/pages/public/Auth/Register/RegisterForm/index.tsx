import { MdEmail, MdPassword } from "react-icons/md";
import { Input } from "../../../../../components/Input";
import { ChangeEvent, useState } from "react";
import { Address } from "../../../../../models/address";
import { Cellphone } from "../../../../../models/cellphone";
import { Select } from "../../../../../components/Select";
import api from "../../../../../api/api";

type States =
  | "SC"
  | "RS"
  | "PR"
  | "SP"
  | "RJ"
  | "DF"
  | "MT"
  | "MS"
  | "GO"
  | "AC"
  | "AL"
  | "AP"
  | "AM"
  | "BA"
  | "CE"
  | "ES"
  | "MG"
  | "MA"
  | "PA"
  | "PB"
  | "PE"
  | "PI"
  | "RN"
  | "RO"
  | "RR"
  | "SE"
  | "TO";

const STATE_CHOICES = [
  { tipo: "SC", nome: "Santa Catarina" },
  { tipo: "RS", nome: "Rio Grande do Sul" },
  { tipo: "PR", nome: "Paraná" },
  { tipo: "SP", nome: "São Paulo" },
  { tipo: "RJ", nome: "de Janeiro" },
  { tipo: "DF", nome: "Distrito Federal" },
  { tipo: "MT", nome: "Mato Grosso" },
  { tipo: "MS", nome: "Mato Grosso do Sul" },
  { tipo: "GO", nome: "Goiás" },
  { tipo: "AC", nome: "Acre" },
  { tipo: "AL", nome: "Alagoas" },
  { tipo: "AP", nome: "Amapá" },
  { tipo: "AM", nome: "Amazonas" },
  { tipo: "BA", nome: "Bahia" },
  { tipo: "CE", nome: "Ceará" },
  { tipo: "ES", nome: "Espirito Santo" },
  { tipo: "MG", nome: "Minas Gerais" },
  { tipo: "MA", nome: "Maranhão" },
  { tipo: "PA", nome: "Pará" },
  { tipo: "PB", nome: "Paraíba" },
  { tipo: "PE", nome: "Pernambuco" },
  { tipo: "PI", nome: "Piauí" },
  { tipo: "RN", nome: "Rio Grande do Norte" },
  { tipo: "RO", nome: "Rôndonia" },
  { tipo: "RR", nome: "Roraima" },
  { tipo: "SE", nome: "Sergipe" },
  { tipo: "TO", nome: "Tocantins" },
];

const TELEFONE_CHOICES = [
  {
    tipo: "MO",
    nome: "Celular",
  },
  {
    tipo: "FX",
    nome: "Fixo",
  },
];

const REGION_CHOICES = [
  { tipo: "SU", nome: "Sul" },
  { tipo: "NO", nome: "Norte" },
  { tipo: "CO", nome: "Centro-Oeste" },
  { tipo: "SE", nome: "Sudeste" },
  { tipo: "NE", nome: "Nordeste" },
];

const SEX_CHOICES = [
  {
    nome: "Masculino",
    tipo: "M",
  },
  {
    nome: "Feminio",
    tipo: "F",
  },
];

type RegisterPerson = {
  cpf: string;
  age: number;
  sex: "M" | "F";
};

type RegisterUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  type: "P";
};

export const RegisterForm = () => {
  const [user, setUser] = useState<RegisterUser>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    type: "P",
  });

  const [person, setPerson] = useState<RegisterPerson>({
    age: 0,
    cpf: "",
    sex: "M",
  });

  const [address, setAddress] = useState<Address>({
    cep: "",
    city: "",
    neighboorhood: "",
    number: 0,
    region: "SU",
    street: "",
    state: "SC",
  });

  const [cellphone, setCellphone] = useState<Cellphone>({
    ddd: "",
    telefone: "",
    type: "MO",
  });

  const handleRegister = async () => {
    await api.get("auth/csrf").then(() =>
      api.post("auth/register/person", {
        cellphone: { ...cellphone },
        address: { ...address },
        user: { ...user },
        person: { ...person },
      })
    );
  };

  return (
    <div className="bg-gradient-to-b from-[#0f172a] flex flex-col justify-center items-center to-black w-full h-full">
      <h1 className="text-[#bfa15e] xl:mb-8 text-5xl font-bold font-headers">
        REGISTRE-SE
      </h1>
      <form
        className="flex xl:text-xl flex-col justify-center items-center gap-y-6 xl:px-20 xl:py-10 bg-[#0f172a] xl:gap-x-10 rounded-xl shadow-2xl ring-1 ring-[#1e1e1e]"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <div className="xl:grid xl:grid-cols-2 gap-x-10">
          <div className="flex flex-col text-white font-semibold">
            <h1 className="text-2xl pb-4">Informações Gerais:</h1>
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                Icon={MdEmail}
                label="Nome"
                value={user.first_name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUser({ ...user, first_name: e.target.value })
                }
                placeholder="Rodrigo"
                type="text"
              />
              <Input
                Icon={MdEmail}
                label="Sobrenome"
                value={user.last_name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUser({ ...user, last_name: e.target.value })
                }
                placeholder="Afonso"
                type="text"
              />
            </div>
            <Input
              Icon={MdEmail}
              label="Email"
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, email: e.target.value })
              }
              placeholder="Coloque seu email aqui..."
              type="text"
            />
            <Input
              Icon={MdEmail}
              label="CPF"
              value={person.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPerson({ ...person, cpf: e.target.value })
              }
              placeholder="Coloque sua senha aqui..."
              type="text"
            />
            <div className="grid grid-cols-2 gap-x-2 items-center">
              <Input
                Icon={MdEmail}
                label="Idade"
                value={person.age}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPerson({ ...person, age: parseInt(e.target.value) })
                }
                placeholder="Rodrigo"
                type="text"
              />
              <div className="mt-5 ml-32">
                <Select
                  choices={SEX_CHOICES}
                  value={person.sex}
                  onChange={(e) =>
                    setPerson({ ...person, sex: e.target.value as "F" | "M" })
                  }
                />
              </div>
            </div>
            <Input
              Icon={MdEmail}
              label="Senha"
              value={user.password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, password: e.target.value })
              }
              placeholder="Coloque sua senha aqui..."
              type="text"
            />
          </div>

          <div className="flex flex-col text-white font-semibold border-r-2 border-[#0f172a] w-full">
            <h1 className="text-2xl pb-4">Endereço:</h1>
            <div className="flex gap-x-2">
              <div className="w-[100px]">
                <Input
                  Icon={MdEmail}
                  label="Número"
                  value={address.number || 0}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setAddress({ ...address, number: parseInt(e.target.value) })
                  }
                  placeholder="Rodrigo"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full">
                <Input
                  Icon={MdEmail}
                  label="Rua"
                  value={address.street}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                  placeholder="Afonso"
                  type="text"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 justify-between gap-x-2">
              <Input
                Icon={MdEmail}
                label="Cidade"
                value={address.city}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAddress({ ...address, city: e.target.value })
                }
                placeholder="Rodrigo"
                type="text"
              />
              <Input
                Icon={MdEmail}
                label="Bairro"
                value={address.neighboorhood}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAddress({ ...address, neighboorhood: e.target.value })
                }
                placeholder="Afonso"
                type="text"
              />
            </div>
            <Input
              Icon={MdEmail}
              label="CEP"
              value={address.cep}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddress({ ...address, cep: e.target.value })
              }
              placeholder="Coloque seu email aqui..."
              type="text"
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Select
                choices={STATE_CHOICES}
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value as States })
                }
              />
              <Select
                choices={REGION_CHOICES}
                value={address.region}
                onChange={(e) =>
                  setAddress({
                    ...address,
                    region: e.target.value as "SE" | "SU" | "NO" | "CO" | "NE",
                  })
                }
              />
            </div>

            <h1 className="text-2xl pb-4 pt-8">Telefone:</h1>
            <Select
              choices={TELEFONE_CHOICES}
              value={cellphone.type}
              onChange={(e) =>
                setCellphone({
                  ...cellphone,
                  type: e.target.value as "FX" | "MO",
                })
              }
            />
            <div className="flex">
              <div className="w-[100px] mr-[10px]">
                <Input
                  Icon={MdEmail}
                  label="DDD"
                  value={cellphone.ddd}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCellphone({ ...cellphone, ddd: e.target.value })
                  }
                  placeholder="Rodrigo"
                  type="text"
                />
              </div>
              <Input
                Icon={MdEmail}
                label="Telefone"
                value={cellphone.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCellphone({ ...cellphone, telefone: e.target.value })
                }
                placeholder="Afonso"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="text-white inline-block xl:text-xl text-[18px] px-[4px] relative cursor-pointer border-[2px] xl:px-4 xl:py-2 ease-in-out">
          <button className="font-headers uppercase hover:cursor-pointer">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};
