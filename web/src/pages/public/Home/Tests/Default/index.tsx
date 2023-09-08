import { AiFillHeart } from "react-icons/ai";
import { BsGraphDownArrow } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { MdThumbsUpDown } from "react-icons/md";
import { TestCard } from "../TestCard/Default";

export const Default = () => {
  return (
    <div id="service">
      <div className="h-full w-full bg-gradient-to-b from-[#0f172a] to-black">
        <h1 className="uppercase font-bold text-[#bfa15e] font-headers tracking-[7px] text-7xl text-center py-[60px]">
          TESTES MENTAIS
        </h1>
        <div className="grid grid-cols-2 gap-x-[110px] gap-y-[20px] pt-[10px] pb-[80px] font-sans text-white px-[200px]">
          <TestCard.Root route="/login">
            <TestCard.Icon Icon={FaBrain} />
            <div>
              <TestCard.Title title="Teste de Personalidade" />
              <TestCard.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas imperdiet eu eros at mattis. Praesent porttitor nulla
                eu pulvinar facilisis. Praesent at diam risus.
              </TestCard.Content>
            </div>
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={BsGraphDownArrow} />
            <div>
              <TestCard.Title title="Qualidade de Vida" />
              <TestCard.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas imperdiet eu eros at mattis. Praesent porttitor nulla
                eu pulvinar facilisis. Praesent at diam risus.
              </TestCard.Content>
            </div>
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={AiFillHeart} />
            <div>
              <TestCard.Title title="Linguagem Amorosa" />
              <TestCard.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas imperdiet eu eros at mattis. Praesent porttitor nulla
                eu pulvinar facilisis. Praesent at diam risus.
              </TestCard.Content>
            </div>
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={MdThumbsUpDown} />
            <div>
              <TestCard.Title title="Teste de Preferências" />
              <TestCard.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas imperdiet eu eros at mattis. Praesent porttitor nulla
                eu pulvinar facilisis. Praesent at diam risus.
              </TestCard.Content>
            </div>
          </TestCard.Root>
        </div>
      </div>
    </div>
  );
};
