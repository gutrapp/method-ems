import { AiFillHeart } from "react-icons/ai";
import { BsGraphDownArrow } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { MdThumbsUpDown } from "react-icons/md";
import { TestCard } from "../TestCard/Mobile";

export const Mobile = () => {
  return (
    <div id="service">
      <div className="h-[240px] w-full bg-gradient-to-b from-[#0f172a] to-black">
        <h1 className="uppercase text-white pt-[10px] font-headers font-bold text-[37px] text-center mb-2">
          TESTES MENTAIS
        </h1>
        <div className="grid grid-cols-2 font-sans text-white justify-center items-center">
          <TestCard.Root route="/login">
            <TestCard.Icon Icon={FaBrain} />
            <TestCard.Title title="Teste de Personalidade" />
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={BsGraphDownArrow} />
            <TestCard.Title title="Qualidade de Vida" />
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={AiFillHeart} />
            <TestCard.Title title="Linguagem Amorosa" />
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={MdThumbsUpDown} />
            <TestCard.Title title="Teste de Preferências" />
          </TestCard.Root>
        </div>
      </div>
    </div>
  );
};
