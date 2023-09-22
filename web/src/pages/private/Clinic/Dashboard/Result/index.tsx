import { useEffect, useState } from "react";
import { DashboardLayout } from "../../DashboardLayout";
import api from "../../../../../api/api";
import { Result } from "../../../../../models/result";
import { useNavigate, useParams } from "react-router-dom";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { AiFillIdcard, AiOutlineClose } from "react-icons/ai";
import { Select } from "../../../../../components/Select";
import { FaKey } from "react-icons/fa";
import { Input } from "../../../../../components/Input";

const ClinicResult = () => {
  const { id } = useParams();

  const [results, setResults] = useState<Result[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    async function getResults() {
      await api.get(`clinic_specific/${id}/result`).then((response) => {
        if (response.status === 200) setResults(response.data);
      });
    }

    getResults();
  }, []);

  return (
    <DashboardLayout>
      <main className="text-white w-full h-full">
        <div>
          <h1 className="text-3xl font-bold text-[#bfa15e] mb-12">Chaves</h1>
        </div>
        <div className=" flex flex-col gap-y-4">
          <div
            onClick={() => setOpen(!open)}
            className="ring-1 ring-[#bfa15e] items-center hover:cursor-pointer flex bg-gradient-to-b from-[#0f172a] to-black w-fit px-4 py-1 rounded-full"
          >
            <h1 className="pr-2 font-bold">Adicionar chave</h1>
          </div>
          <table className="ring-2 ring-white rounded-2xl w-full h-full bg-gradient-to-b from-[#0f172a] to-black">
            <thead className="border-b-2 border-white">
              <tr className="grid grid-cols-7">
                <th className="border-r-2 border-white">Aberto</th>
                <th className="border-r-2 border-white">Usado</th>
                <th className="border-r-2 border-white">Chave</th>
                <th className="border-r-2 border-white">Teste</th>
                <th className="border-r-2 border-white">Estado</th>
                <th className="border-r-2 border-white">Criado</th>
                <th>Validade</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => {
                return (
                  <tr className="grid grid-cols-7 text-center w-full">
                    <td className="border-r-2 border-white flex justify-center">
                      {result.seen ? <BiCheckboxChecked /> : <BiCheckbox />}
                    </td>
                    <td className="border-r-2 border-white  flex justify-center">
                      {result.testTaken ? (
                        <BiCheckboxChecked />
                      ) : (
                        <BiCheckbox />
                      )}
                    </td>
                    <td className="border-r-2 border-white">{result.key}</td>
                    <td className="border-r-2 border-white">
                      {result.test === "MB" ? "Four Elements" : ""}
                    </td>
                    <td className="border-r-2 border-white">
                      {result.expired ? "Vencido" : "Funcional"}
                    </td>
                    <td className="border-r-2 border-white">
                      {result.created_at}
                    </td>
                    <td>{result.expires_at}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Modal open={open} setOpen={setOpen} />
    </DashboardLayout>
  );
};

const TEST_CHOICES = [
  {
    tipo: "MB",
    nome: "Personalidade",
  },
  {
    tipo: "LI",
    nome: "Vida",
  },
  {
    tipo: "SK",
    nome: "Auto Conhecimento",
  },
  {
    tipo: "LO",
    nome: "Linguagem Amorosa",
  },
];

const Modal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useNavigate();

  const { id } = useParams();

  const [cpf, setCpf] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [test, setTest] = useState<"MB" | "SK" | "LO" | "LI">("MB");

  const hadnleCreateResult = async () => {
    await api.post(`result_specific/${cpf}/${id}/create`, {
      key: key,
      test: test,
    });
  };

  return (
    open && (
      <div className="fixed flex inset-0 w-full h-full bg-black bg-opacity-70 justify-center items-center">
        <div className="w-[500px] h-[450px] bg-gradient-to-b from-[#0f172a] to-black py-5 shadow-2xl ring-1 ring-[#1e1e1e] rounded-xl px-5 text-lg text-white">
          <button
            onClick={() => setOpen(!open)}
            className="border border-white rounded-full p-1 mb-7"
          >
            <AiOutlineClose />
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              hadnleCreateResult();
            }}
            className="flex flex-col gap-y-12"
          >
            <div className="flex flex-col gap-y-8">
              <Input
                Icon={AiFillIdcard}
                label="CPF"
                value={cpf}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCpf(e.target.value)
                }
                placeholder="CPF da pessoa"
                type="text"
              />
              <Input
                Icon={FaKey}
                label="Chave"
                value={key}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setKey(e.target.value)
                }
                placeholder="Crie uma chave"
                type="text"
              />
              <div>
                <label>Tipo de teste: </label>
                <Select
                  choices={TEST_CHOICES}
                  value={test}
                  onChange={(e) =>
                    setTest(e.target.value as "MB" | "LI" | "SK" | "LO")
                  }
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="text-white xl:text-xl px-[4px] relative cursor-pointer border-[2px] xl:px-4 ease-in-out font-headers uppercase hover:cursor-pointer">
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ClinicResult;
