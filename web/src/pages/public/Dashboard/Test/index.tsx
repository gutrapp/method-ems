import { useEffect, useState } from "react";
import api from "../../../../api/api";
import { AiOutlineClose } from "react-icons/ai";

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
    <main className="w-full h-screen flex flex-col text-white bg-gradient-to-b from-[#0f172a] to-black py-40 px-96 items-center gap-y-12 justify-center">
      <div>
        <h1 className="text-4xl font-headers font-bold text-[#bfa15e]">
          Resultados
        </h1>
      </div>
      <div className="flex flex-col w-full h-full">
        <button
          onClick={() => setOpen(!open)}
          className="w-[170px] mb-4 shadow-2xl ring-1 ring-[#1e1e1e] rounded-xl px-2 text-2xl"
        >
          Usar chave
        </button>
        <div className="h-full w-full rounded-xl shadow-2xl ring-1 ring-[#1e1e1e] px-6 py-4">
          {results.map((result) => {
            return (
              <div className="mb-4 shadow-2xl ring-1 ring-[#1e1e1e] rounded-xl px-4 text-2xl py-2">
                a
              </div>
            );
          })}
        </div>
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
  return (
    open && (
      <div className="absolute w-full h-full bg-black bg-transparent/40 justify-center items-center">
        <div className="relative m-auto w-[500px] h-[350px]">
          <button onClick={() => setOpen(!open)}>
            <AiOutlineClose />
          </button>
          <form></form>
        </div>
      </div>
    )
  );
};

export default Test;
