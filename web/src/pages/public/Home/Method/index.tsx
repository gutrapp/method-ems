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
            <MethodItem.Title content="Objetivo" />
            <MethodItem.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              imperdiet eu eros at mattis. Praesent porttitor nulla eu pulvinar
              facilisis. Praesent at diam risus.
            </MethodItem.Content>
          </MethodItem.Root>

          <MethodItem.Root>
            <MethodItem.Title content="O que é?" />
            <MethodItem.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              imperdiet eu eros at mattis. Praesent porttitor nulla eu pulvinar
              facilisis. Praesent at diam risus.
            </MethodItem.Content>
          </MethodItem.Root>

          <MethodItem.Root>
            <MethodItem.Title content="Como funciona?" />
            <MethodItem.Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              imperdiet eu eros at mattis. Praesent porttitor nulla eu pulvinar
              facilisis. Praesent at diam risus.
            </MethodItem.Content>
          </MethodItem.Root>
        </div>
      </div>
    </div>
  );
};
