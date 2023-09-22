import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import api from "../../../../api/api";

type DashboardLayout = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayout) => {
  const router = useNavigate();

  const { pathname } = useLocation();

  const { id } = useParams();

  const [current, setCurrent] = useState<"C" | "P" | "T">("C");

  useEffect(() => {
    const path = pathname.split("/");

    if (path[path.length - 1] == "person" || path[path.length - 2] == "person")
      setCurrent("P");

    if (path[path.length - 1] == "result" || path[path.length - 2] == "result")
      setCurrent("C");

    if (path[path.length - 1] == "test" || path[path.length - 2] == "test")
      setCurrent("T");
  }, []);

  const handleLogout = async () => {
    await api.delete("auth/logout").then(() => {
      router("/");
    });
  };

  return (
    <main className="fixed p-5 h-screen w-full bg-gradient-to-b from-[#0f172a] to-black">
      <div className="bg-[#33363d] h-full rounded-2xl shadow-2xl text-white flex">
        <div className="bg-[#1e1e1e] shadow-2xl rounded-r-2xl rounded-l-2xl h-full w-56 py-3 flex flex-col justify-between px-4">
          <div className="flex flex-col font-bold">
            <h1 className="flex text-3xl font-bold mb-5">
              JEAN <h1 className="text-[#bfa15e]">CARLO</h1>
            </h1>
            <div
              onClick={() => router(`/admin/clinic/${id}/dashboard/result`)}
              className={
                current == "C"
                  ? "text-[#bfa15e] hover:cursor-pointer hover:bg-stone-700 rounded-full px-4 py-2"
                  : "text-white hover:cursor-pointer hover:bg-stone-700 rounded-full px-4 py-2"
              }
            >
              Chaves
            </div>
            <div
              className={
                current == "P"
                  ? "hover:cursor-pointer hover:bg-stone-700 rounded-full px-4 py-2 text-[#bfa15e]"
                  : "hover:cursor-pointer hover:bg-stone-700 rounded-full px-4 py-2 text-white"
              }
              onClick={() => router(`/admin/clinic/${id}/dashboard/person`)}
            >
              Pessoa
            </div>
            <div
              className={
                current == "T"
                  ? "text-[#bfa15e] hover:cursor-pointer hover:bg-stone-700 rounded-full px-4 py-2"
                  : "text-white hover:cursor-pointer hover:bg-stone-700 rounded-full px-4 py-2"
              }
              onClick={() => router(`/admin/clinic/${id}/dashboard/test`)}
            >
              Testes
            </div>
          </div>
          <div
            onClick={() => handleLogout()}
            className="font-bold flex items-center justify-between hover:cursor-pointer hover:bg-stone-700 rounded-full px-4 py-2"
          >
            Sair
            <IoMdExit />
          </div>
        </div>
        <div className="mx-12 my-10 w-full h-full">{children}</div>
      </div>
    </main>
  );
};
