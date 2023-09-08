import { IMAGES } from "../../../../helper/images.helper";

export const Who = () => {
  return (
    <div className="flex flex-col h-full relative">
      <img src={IMAGES.gold} className="xl:h-[270px] h-[200px]" />
      <div className="absolute inset-0 h-full flex items-center flex-col">
        <div className="m-auto text-center xl:w-[710px] flex-col flex">
          <h1 className="xl:text-4xl ml-[5px] my-auto xl:my-0 xl:ml-0 text-2xl font-headers text-black xl:tracking-[7px] text-center items-center font-bold">
            QUEM SOU
          </h1>
          <text className="text-white text-[12px] px-[10px] xl:text-xl text-center font-light xl:font-extralight">
            Empresário, especialista em gestão comercial com mais de 14 anos de
            experiência em treinamento e desenvolvimento humano, que resultam em
            mais de 10 mil profissionais e empreendedores transformados, em 230
            cidades ao redor do mundo. Psicanalista com especialização em
            análise de comportamento humano, Master Coach, Master Trainer em
            Inteligência Emocional, e Master Instructor Neurolinguística. Autor
            de dezenas de metodologias e campanhas psicodinâmicas para uso em
            ambiente de negócios.
          </text>
        </div>
      </div>
    </div>
  );
};
