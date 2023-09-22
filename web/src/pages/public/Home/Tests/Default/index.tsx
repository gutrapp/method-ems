import { TbCompass, TbDirections } from "react-icons/tb";
import { TestCard } from "../TestCard/Default";
import { BiBrain } from "react-icons/bi";
import { GiLovers, GiUnbalanced } from "react-icons/gi";

export const Default = () => {
  return (
    <div id="service">
      <div className="h-full w-full bg-gradient-to-b from-[#0f172a] to-black">
        <h1 className="uppercase font-bold text-[#bfa15e] font-headers tracking-[6px] text-4xl text-center py-[60px]">
          TESTES DE INTELIGÊNCIA EMOCIONAL
        </h1>
        <div className="flex flex-col gap-x-[90px] gap-y-[20px] pt-[10px] pb-[80px] font-sans text-white px-[150px]">
          <TestCard.Root route="/login">
            <TestCard.Icon Icon={BiBrain} />
            <div className="mx-6">
              <TestCard.Title title="Teste de Personalidade - FOUR ELEMENTS" />
              <TestCard.Content>
                Nossa metodologia já foi aplicada em mais de 10 mil pessoas
                diretamente pelo interprete e Instrutor Jean Carlo Cardozo ao
                longo de anos de pesquisa e treinamentos. Nossa base de
                conhecimento está diretamente ligada ao estudo da psicanálise do
                Doutor Sigmund Freud ID, EGO, SUPER EGO, consciente e
                inconsciente. Também a uma profunda avalição da teoria dos tipos
                psicológicos do Doutor Carl Jung.
              </TestCard.Content>
            </div>
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={GiUnbalanced} />
            <div className="mx-6">
              <TestCard.Title title="Equílibrio de Vida" />
              <TestCard.Content>
                Este teste ajudará a você a obter uma visão clara sob quais
                áreas de sua vida merecem reforços positivos por estarem bem e
                quais dela merecem uma atenção mais especial. Diante de uma vida
                onde diariamente corremos contra o tempo visando ansiosamente
                antecipar boas conquistas e também prever sérios problemas que
                aliás muitas vezes não acontecem. Esta ferramenta será sua
                aliada para perceber quais prioridades seu corpo e mente
                precisam hoje.
              </TestCard.Content>
            </div>
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={GiLovers} />
            <div className="mx-6">
              <TestCard.Title title="Como sentir o Afeto e Amor" />
              <TestCard.Content>
                Muitas vezes nos sentimos sozinhos mesmo cercados de pessoas,
                isso se dá por inúmeros aspectos um deles é nossa incapacidade
                de perceber o afeto e amor que pessoas nos transmitem, cada qual
                do seu jeito. Nem sempre o que eu desejo é o que o meu
                companheiro ou companheira deseja e descobrir isso pode ser uma
                das maiores chaves para uma vida mais feliz e harmoniosa, a dois
                e também com toda sua família.
              </TestCard.Content>
            </div>
          </TestCard.Root>

          <TestCard.Root route="/login">
            <TestCard.Icon Icon={TbDirections} />
            <div className="mx-6">
              <TestCard.Title title="Bússola de Referência do Aprendizado" />
              <TestCard.Content>
                Nosso corpo recebe, interpreta e envia mensagens do ambiente a
                nossa volta diretamente ao inconsciente emocional, que por sua
                vês recebe e registra todo este aprendizado quer seja negativo
                ou positivo. Descobrir como aproveitar melhor nossa capacidade
                de intercomunicação melhora nosso desempenho em todas as áreas
                da vida e principalmente na melhora da comunicação e plenitude
                emocional de aprendizado.
              </TestCard.Content>
            </div>
          </TestCard.Root>
        </div>
      </div>
    </div>
  );
};
