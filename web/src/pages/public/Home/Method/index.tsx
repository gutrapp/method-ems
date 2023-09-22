import { IMAGES } from "../../../../helper/images.helper";
import { MethodItem } from "./MethodItem";

export const Method = () => {
  return (
    <div className="flex flex-col relative" id="method">
      <img src={IMAGES.gold} className="xl:h-[500px] h-[450px]" />

      <div className="absolute xl:inset-0 xl:pt-10 flex flex-col justify-center items-center p-[14px]">
        <h1 className="uppercase text-white xl:text-5xl text-3xl w-full font-bold text-center xl:py-[40px] font-headers xl:tracking-[3px]">
          Método emocional
          <strong className="text-black xl:text-6xl text-4xl">
            MENTE
          </strong>{" "}
          Saudável
        </h1>
        <div className="flex flex-col xl:flex-row xl:justify-around items-center xl:pt-[40px] pt-[8px] xl:pb-[80px] gap-x-[8px]">
          <MethodItem.Root>
            <MethodItem.Title content="Missão" />
            <MethodItem.Content>
              Ajudar as pessoas a equilibrar seus pensamentos e sentimentos
              através do autoconhecimento pela Inteligência emocional
              psicanalítica, resultando em mais felicidade e plenitude de seus
              relacionamentos com o seu mundo interior e exterior.
            </MethodItem.Content>
          </MethodItem.Root>

          <MethodItem.Root>
            <MethodItem.Title content="Visão" />
            <MethodItem.Content>
              Reconhecido como a pessoa que através de estudos científicos na
              mente humana, conseguiu colocar em pratica e comprovar que ao
              “tocar uma alma humana, basta ser uma alma humana”.
            </MethodItem.Content>
          </MethodItem.Root>

          <MethodItem.Root>
            <MethodItem.Title content="Valores" />
            <MethodItem.Content>
              Ética, sustentabilidade, amor a Deus e ao próximo, lealdade,
              equilíbrio, responsabilidade social, criatividade, transparência e
              caridade.
            </MethodItem.Content>
          </MethodItem.Root>
        </div>
      </div>
    </div>
  );
};
