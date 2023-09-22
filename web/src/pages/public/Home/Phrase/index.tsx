import { IMAGES } from "../../../../helper/images.helper";

export const Phrases = () => {
  return (
    <div className="xl:h-full w-full h-[200px] bg-black relative">
      <img src={IMAGES.frase} className="w-full hidden xl:flex" />
      <img
        src={IMAGES.fraseMobile}
        className="w-full h-[200px] xl:hidden flex"
      />
      <div className="absolute inset-0 h-full flex-col bg-gradient-to-b from-transparent to-black flex justify-center items-center">
        <div className="text-white flex flex-col items-center  xl:text-4xl font-headers w-full">
          <h1 className="flex justify-center w-[1000px] font-bold">
            "AS DÚVIDAS E O EXCESSO DE FUTURO, RESULTAM EM ANSIEDADE E FALTA DE
            FELICIDADE NO PRESENTE DA VIDA"
          </h1>
          <h1 className="xl:pt-2 pt-[2px] text-[#bfa15e] font-extralight xl:text-2xl flex justify-end w-full mr-96">
            - Jean Carlo Cardozo
          </h1>
        </div>
        <div className="flex flex-col justify-end  items-center text-xl text-white">
          <h1>QUANTO MAIS EU ERREI MAIS EU ME CONSTRUÍ </h1>
          <h1>1% Melhor sempre !</h1>
        </div>
      </div>
    </div>
  );
};
