import { MdEmail, MdPassword } from "react-icons/md";
import { Input } from "../../../../../components/Input";
import { ChangeEvent, useState } from "react";
import api from "../../../../../api/api";
import { useNavigate } from "react-router-dom";

type LoginData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const router = useNavigate();

  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    await api
      .get("auth/csrf")
      .then(() =>
        api.post("auth/login", data).then((response) => console.log(response))
      )
      .then(() => router("/dashboard/test"));
  };

  return (
    <div className="bg-gradient-to-b from-[#0f172a] flex justify-center items-center to-black w-full h-full">
      <form
        className="flex flex-col items-center justify-center bg-[#0f172a] rounded-xl shadow-2xl ring-1 ring-[#1e1e1e]"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="flex flex-col xl:px-16 xl:py-20 p-4 rounded-xl shadow-2x">
          <div className="flex flex-col text-center xl:pb-5">
            <div className="flex flex-col items-center pb-4 justify-center xl:text-4xl text-white">
              <h1 className="flex text-4xl xl:text-6xl">
                JEAN <h1 className="text-[#bfa15e]">CARLO</h1>
              </h1>
              <h1 className="font-semibold text-lg font-headers">
                Entre em sua conta
              </h1>
            </div>

            <div className="w-full text-center xl:pt-5">
              {error && (
                <label className="text-red-700 border-2 px-2 rounded-full border-red-700 xl:px-2">
                  {error}
                </label>
              )}
            </div>
          </div>
          <div className="xl:flex xl:justify-center">
            <div className="flex flex-col gap-y-4">
              <Input
                Icon={MdEmail}
                label="Email"
                value={data.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData({ ...data, email: e.target.value })
                }
                placeholder="Coloque seu email aqui..."
                type="text"
              />
              <Input
                Icon={MdPassword}
                label="Senha"
                value={data.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData({ ...data, password: e.target.value })
                }
                placeholder="Coloque seu email aqui..."
                type="text"
              />
            </div>
          </div>

          <div className="flex justify-center pt-5 xl:pt-10">
            <button
              type="submit"
              className="shadow-2xl px-2 font-headers uppercase flex items-center mr-2 hover:cursor-pointer duration-300 ease-in-out xl:my-[3px] xl:px-4 xl:h-[45px] border-white border"
            >
              <h1>Entrar</h1>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
