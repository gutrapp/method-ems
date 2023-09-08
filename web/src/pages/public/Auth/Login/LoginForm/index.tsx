import { MdEmail } from "react-icons/md";
import { Input } from "../../../../../components/Input";
import { ChangeEvent, useState } from "react";

type LoginData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  return (
    <div className="bg-gradient-to-b from-[#0f172a] flex justify-center items-center to-black w-full h-full">
      <form
        className="flex flex-col xl:gap-14 items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col xl:px-16 xl:py-20 p-4 rounded-xl shadow-2x">
          <div className="flex flex-col text-center xl:pb-5">
            <div className="flex flex-row items-center pb-4 justify-center xl:text-4xl text-[#bfa15e]">
              <h1 className="font-semibold font-headers">
                ENTRAR EM SUA CONTA
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
          <div className="xl:flex">
            <div className="flex flex-col xl:pr-10">
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
            </div>
          </div>

          <div className="flex justify-center xl:pt-10">
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
