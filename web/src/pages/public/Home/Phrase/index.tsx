import { IMAGES } from "../../../../helper/images.helper";

export const Phrases = () => {
  return (
    <div className="xl:h-full w-full h-[200px] bg-black relative">
      <img src={IMAGES.frase} className="w-full hidden xl:flex" />
      <img
        src={IMAGES.fraseMobile}
        className="w-full h-[200px] xl:hidden flex"
      />
      <div className="absolute inset-0 h-full bg-gradient-to-b from-transparent to-black flex justify-center items-center">
        <div className="text-white xl:text-6xl font-headers">
          <h1 className="flex">
            "Suas dúvidas sobre o{" "}
            <strong className="text-[#bfa15e] xl:text-[62px] pl-[2px] xl:pl-2">
              futuro
            </strong>
            , literalmente,
          </h1>
          <h1 className="flex">
            destroem sua
            <strong className="text-[#bfa15e] xl:text-[62px] pl-[2px] pr-[2px] xl:pl-2 xl:pr-2">
              felicidade
            </strong>{" "}
            no
            <strong className="text-[#bfa15e] xl:text-[62px] pl-[2px] xl:pl-2">
              presente
            </strong>
            ". <br />
          </h1>
          <h1 className="xl:pt-2 pt-[2px] text-white xl:text-2xl">
            - Jean Carlo
          </h1>
        </div>
      </div>
    </div>
  );
};
