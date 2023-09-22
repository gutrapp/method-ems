import { useEffect, useState } from "react";
import api from "../../../../api/api";
import { AiOutlineClose, AiOutlineWarning } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Select } from "../../../../components/Select";
import { Input } from "../../../../components/Input";
import { FaKey } from "react-icons/fa";

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

const Test = () => {
  const [results, setResults] = useState<any[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    async function getResults() {
      return await api.get("result_specific/user").then((response) => {
        setResults(response.data);
      });
    }

    getResults();
  }, []);

  return (
    <main className="w-full h-full flex flex-col text-white bg-gradient-to-b from-[#0f172a] to-black py-32 px-24 gap-y-12 ">
      <div>
        <h1 className="text-4xl font-headers font-bold text-[#bfa15e]">
          Resultados
        </h1>
      </div>
      <div className="flex flex-col w-full h-full">
        {results && (
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="w-[170px] mb-4 shadow-2xl ring-1 ring-[#1e1e1e] rounded-xl px-2 text-2xl"
            >
              Usar chave
            </button>

            {results.map((result) => {
              return (
                <div className="h-full w-full rounded-xl shadow-2xl ring-1 ring-[#1e1e1e] px-6 py-4">
                  <div className="mb-4 shadow-2xl ring-1 ring-[#1e1e1e] rounded-xl px-4 text-2xl py-2"></div>
                </div>
              );
            })}
          </div>
        )}
        {results.length == 0 && (
          <div className="text-white flex flex-col w-full h-full justify-center items-center">
            <AiOutlineWarning size={200} />
            <h1 className="text-2xl">Você não possui nenhum resultado!</h1>
            <button
              onClick={() => setOpen(!open)}
              className="w-[170px] mt-12 mb-4 shadow-2xl text-[#bfa15e] ring-1 ring-[#bfa15e] rounded-xl px-2 text-2xl"
            >
              Usar chave
            </button>
            <h1 className="underline hover:cursor-pointer">
              Não possuo chaves
            </h1>
          </div>
        )}
      </div>
      {<Modal open={open} setOpen={setOpen} />}
    </main>
  );
};

const Modal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useNavigate();

  const [key, setKey] = useState<string>("");
  const [type, setType] = useState<"MB" | "SK" | "LO" | "LI">("MB");

  const handleRedirect = async () => {
    await api.get(`result?key=${key}&type=${type}`).then((response) => {
      router(`/tests/result/${response.data[0].id}/four_elements`);
    });
  };

  return (
    open && (
      <div className="fixed flex inset-0 w-full h-full bg-black backdrop-blur-md justify-center items-center">
        <div className="w-[500px] h-[350px] bg-gradient-to-b from-[#0f172a] to-black py-5 shadow-2xl ring-1 ring-[#1e1e1e] rounded-xl px-5 text-2xl text-white">
          <button
            onClick={() => setOpen(!open)}
            className="border border-white rounded-full p-1 mb-7"
          >
            <AiOutlineClose />
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRedirect();
            }}
            className="flex flex-col gap-y-12"
          >
            <div className="flex flex-col gap-y-8">
              <Input
                Icon={FaKey}
                label="Chave"
                value={key}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setKey(e.target.value)
                }
                placeholder="Coloque sua chave aqui"
                type="text"
              />
              <div>
                <label>Tipo de teste: </label>
                <Select
                  choices={TEST_CHOICES}
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value as "MB" | "LI" | "SK" | "LO")
                  }
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button className="text-white xl:text-xl px-[4px] relative cursor-pointer border-[2px] xl:px-4 ease-in-out font-headers uppercase hover:cursor-pointer">
                Usar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Test;
