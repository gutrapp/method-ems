import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../../../helper/images.helper";

export const LoginBanner = () => {
  const router = useNavigate();

  return (
    <div className="relative w-full">
      <img src={IMAGES.loginBanner} className="w-full h-[550px] xl:h-screen" />

      <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center xl:p-20">
        <div className="flex justify-center items-center w-full h-full flex-col">
          <h1 className="uppercase text-[#bfa15e] font-headers tracking-[5px] text-7xl text-center">
            NOVO AQUI?
          </h1>
          <p className="my-10 text-[#F0EAD6] w-[300px] xl:w-full">
            Para conseguir fazer qualquer um dos testes, você precisará obter
            uma chave e uma senha. Para obter esta chave você necessita entrar
            em contato com a gente, para entrar em contato, crie uma conta e
            pessa uma chave!
          </p>
          <div className="text-white inline-block xl:text-2xl text-xl px-[4px] relative cursor-pointer xl:border-[2px] border xl:px-4 xl:py-2 ease-in-out">
            <button
              onClick={() => router("/register")}
              className="font-headers uppercase hover:cursor-pointer"
            >
              Registre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
