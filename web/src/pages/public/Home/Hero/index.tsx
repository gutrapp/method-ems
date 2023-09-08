import { IMAGES } from "../../../../helper/images.helper";

export const Hero = () => {
  return (
    <div
      id="home"
      className="max-h-[850px] w-full relative border-t xl:border-t-4 border-[#bfa15e]"
    >
      <img src={IMAGES.bg} className="hidden xl:flex h-full w-full" />
      <img src={IMAGES.bgMobile} className="w-full h-[400px] xl:hidden" />
      <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-transparent to-black justify-end h-full">
        <div className="m-auto xl:mr-auto xl:ml-10 ml-[5px] flex items-center justify-center xl:items-start xl:justify-start flex-col">
          <div className="xl:pb-28 pb-[20px]">
            <h1 className="uppercase font-headers text-[#bfa15e] xl:text-9xl font-bold text-5xl">
              A Revelação
            </h1>
            <h1 className="uppercase font-headers xl:pt-5 text-white xl:text-4xl text-lg">
              do seu inconsciente emocional
              <br /> será a chave da sua
              <strong className="text-[#bfa15e] pl-[2px] xl:pl-2">
                transformação
              </strong>
            </h1>
          </div>
          <div className="text-white inline-block xl:text-3xl text-[18px] px-[4px] relative cursor-pointer border-[2px] xl:px-4 xl:py-2 ease-in-out">
            <a href="#method" className="flex">
              <button className="font-headers uppercase hover:cursor-pointer">
                QUERO PARTICIPAR
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
