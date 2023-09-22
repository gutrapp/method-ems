import { SetStateAction, useEffect, useState } from "react";
import api from "../../../../api/api";
import { useParams } from "react-router-dom";

const TEXTS = {};

const WORDS = [
  {
    air: "Idealismo",
    earth: "Meticulosidade",
    water: "Diversão",
    fire: "Persistência",
  },
  {
    air: "Inovação",
    earth: "Organização",
    water: "Integração",
    fire: "Execução",
  },
  {
    air: "Antecipação",
    earth: "Regras",
    water: "Acordo",
    fire: "Persistência",
  },
  {
    air: "Complexidade",
    earth: "Sistematização",
    water: "Interatividade",
    fire: "Objetividade",
  },
  {
    air: "Curiosidade",
    earth: "Planejamento",
    water: "Relacionamento",
    fire: "Direção",
  },
  {
    air: "Questionamento",
    earth: "Detalhamento",
    water: "Participação",
    fire: "Impulsividade",
  },
  {
    air: "Liberdade",
    earth: "Controle",
    water: "Compreensão",
    fire: "Paciência",
  },
  {
    air: "Descobertas",
    earth: "Previsão",
    water: "Naturalidade",
    fire: "Determinação",
  },
  {
    air: "Irrelevância",
    earth: "Inevitabilidade",
    water: "Socialização",
    fire: "Facilidade",
  },
  { air: "Revolução", earth: "Lógica", water: "Tradição", fire: "Quantidade" },
  {
    air: "Independência",
    earth: "Acúmulo",
    water: "Assistência",
    fire: "Empreendimento",
  },
  { air: "Escolha", earth: "Melhoria", water: "Lazer", fire: "Autonomia" },
  { air: "Aventura", earth: "Ordem", water: "Cooperação", fire: "Execução" },
  {
    air: "Novidade",
    earth: "Controle",
    water: "Solidariedade",
    fire: "Atuação",
  },
  {
    air: "Criatividade",
    earth: "Pontualidade",
    water: "Parceria",
    fire: "Vantagem",
  },
  { air: "Adaptação", earth: "Consistência", water: "Equipe", fire: "Líder" },
  { air: "Desafio", earth: "Estratégia", water: "Percurso", fire: "Chegada" },
  { air: "Desconfiança", earth: "Prevenção", water: "União", fire: "Ataque" },
  {
    air: "Mistério",
    earth: "Compreensão",
    water: "Reencontro",
    fire: "Pressa",
  },
  { air: "Mudança", earth: "Rotina", water: "Amizade", fire: "Produtividade" },
  {
    air: "Estranheza",
    earth: "Perfeição",
    water: "Envolvimento",
    fire: "Foco",
  },
  { air: "Eficácia", earth: "Perícia", water: "Experiência", fire: "Sucesso" },
  { air: "Desligado", earth: "Gradativo", water: "Justiça", fire: "Firmeza" },
  {
    air: "Multiplicidade",
    earth: "Cautela",
    water: "Conjunto",
    fire: "Competição",
  },
];

function calculatePorcentages({
  air,
  airWeight,
  earth,
  earthWeight,
  fire,
  fireWeight,
  water,
  waterWeight,
}: MbtiValue) {
  const AIR_SCORE = air * airWeight;
  const FIRE_SCORE = fire * fireWeight;
  const WATER_SCORE = water * waterWeight;
  const EARTH_SCORE = earth * earthWeight;
  const TOTAL = AIR_SCORE + EARTH_SCORE + WATER_SCORE + FIRE_SCORE;

  return {
    airPorcentage: (AIR_SCORE / TOTAL) * 100,
    firePorcentage: (FIRE_SCORE / TOTAL) * 100,
    waterPorcentage: (WATER_SCORE / TOTAL) * 100,
    earthPorcentage: (EARTH_SCORE / TOTAL) * 100,
  };
}

function sortPorcentagesWithType({
  airPorcentage,
  earthPorcentage,
  firePorcentage,
  waterPorcentage,
}: ReturnType<typeof calculatePorcentages>) {
  const values = [
    { type: "AR", porcentage: airPorcentage },
    { type: "WA", porcentage: waterPorcentage },
    { type: "EA", porcentage: earthPorcentage },
    { type: "FI", porcentage: firePorcentage },
  ];

  for (var i = 0; i <= values.length - 1; i++) {
    for (var j = 0; j < values.length - i - 1; j++) {
      if (values[j].porcentage < values[j + 1].porcentage) {
        const temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
    }
  }

  return {
    first: values[0].type,
    second: values[1].type,
    third: values[2].type,
    fourth: values[3].type,
    firstScore: values[0].porcentage,
    secondScore: values[1].porcentage,
    thirdScore: values[2].porcentage,
    fourthScore: values[3].porcentage,
  };
}

type MbtiValue = {
  air: number;
  airWeight: number;
  water: number;
  waterWeight: number;
  earth: number;
  earthWeight: number;
  fire: number;
  fireWeight: number;
};

type Word = {
  air: string;
  earth: string;
  fire: string;
  water: string;
};

type HelperProps = {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
};

type ResultProps = {
  id: string;
  values: MbtiValue;
};

type MbtiWordsProps = {
  air: string;
  earth: string;
  fire: string;
  water: string;
  values: MbtiValue;
  setValues: React.Dispatch<SetStateAction<MbtiValue>>;
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
};

type MbtiSectionsProps = {
  words: Word[];
  values: MbtiValue;
  setValues: React.Dispatch<SetStateAction<MbtiValue>>;
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
};

const Mbti = () => {
  const { id } = useParams();

  const [values, setValues] = useState<MbtiValue>({
    air: 1,
    airWeight: 1,
    water: 1,
    waterWeight: 1,
    earth: 1,
    earthWeight: 1,
    fire: 1,
    fireWeight: 1,
  });

  const [step, setStep] = useState<number>(0);

  return (
    <main className="h-screen w-full bg-gradient-to-b flex flex-col justify-center items-center from-[#0f172a] to-black text-white font-bold">
      {step === 0 && <Helper step={step} setStep={setStep} />}
      {step <= 24 && step > 0 && (
        <MbtiSections
          words={WORDS}
          step={step}
          setStep={setStep}
          values={values}
          setValues={setValues}
        />
      )}
      {step === 24 && <Result values={values} id={id as string} />}
    </main>
  );
};

export default Mbti;

function MbtiWords({
  air,
  earth,
  fire,
  water,
  setValues,
  values,
  step,
  setStep,
}: MbtiWordsProps) {
  const [choice, setChoice] = useState<"air" | "earth" | "water" | "fire">(
    "air"
  );

  const [weight, setWeight] = useState<{
    air: number;
    water: number;
    earth: number;
    fire: number;
  }>({ air: 0, water: 0, earth: 0, fire: 0 });

  const handleNext = () => {
    if (weight.air + weight.water + weight.earth + weight.fire === 10) {
      setValues({
        ...values,
        [choice]: values[choice] + 1,
        fireWeight: values.fireWeight + weight.fire,
        waterWeight: values.waterWeight + weight.water,
        earthWeight: values.earthWeight + weight.earth,
        airWeight: values.airWeight + weight.air,
      });
      setStep(step + 1);
    }
  };

  return (
    <main className="pt-20">
      <div className="grid grid-cols-2 gap-x-24 gap-y-16">
        <div
          className={
            choice === "air"
              ? "bg-gradient-to-b flex flex-col justify-center items-center rounded-2xl from-[#33363d] to-[#0f172a] ring-[#bfa15e] ring-2 w-[400px] h-[170px]"
              : "bg-gradient-to-b flex flex-col justify-center items-center rounded-2xl from-[#1e1e1e] to-black ring-[#0f172a] ring-2 w-[400px] h-[170px]"
          }
        >
          <h1
            className="text-5xl hover:cursor-pointer"
            onClick={() => setChoice("air")}
          >
            {air}
          </h1>
          <div className="flex items-center">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="text-black py-2 px-4 rounded-full mt-2 w-[65px] text-center"
              value={weight.air || 0}
              onChange={(e) =>
                setWeight({ ...weight, air: parseInt(e.target.value) })
              }
            />
          </div>
        </div>
        <div
          className={
            choice === "earth"
              ? "bg-gradient-to-b flex flex-col justify-center items-center duration-500 rounded-2xl from-[#33363d] to-[#0f172a] ring-[#bfa15e] ring-2 w-[400px] h-[170px]"
              : "bg-gradient-to-b flex flex-col justify-center items-center duration-500 rounded-2xl from-[#1e1e1e] to-black ring-[#0f172a] ring-2 w-[400px] h-[170px]"
          }
        >
          <h1
            className="text-5xl hover:cursor-pointer"
            onClick={() => setChoice("earth")}
          >
            {earth}
          </h1>
          <div className="flex items-center">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="text-black py-2 px-4 rounded-full mt-2 w-[65px] text-center"
              value={weight.earth || 0}
              onChange={(e) =>
                setWeight({ ...weight, earth: parseInt(e.target.value) })
              }
            />
          </div>
        </div>
        <div
          className={
            choice === "fire"
              ? "bg-gradient-to-b flex flex-col justify-center items-center duration-500 rounded-2xl from-[#33363d] to-[#0f172a] ring-[#bfa15e] ring-2 w-[400px] h-[170px]"
              : "bg-gradient-to-b flex flex-col justify-center items-center duration-500 rounded-2xl from-[#1e1e1e] to-black ring-[#0f172a] ring-2 w-[400px] h-[170px]"
          }
        >
          <h1
            className="text-5xl hover:cursor-pointer"
            onClick={() => setChoice("fire")}
          >
            {fire}
          </h1>
          <div className="flex items-center">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="text-black py-2 px-4 rounded-full mt-2 w-[65px] text-center"
              value={weight.fire || 0}
              onChange={(e) =>
                setWeight({ ...weight, fire: parseInt(e.target.value) })
              }
            />
          </div>
        </div>
        <div
          className={
            choice === "water"
              ? "bg-gradient-to-b flex flex-col justify-center items-center duration-500 rounded-2xl from-[#33363d] to-[#0f172a] ring-[#bfa15e] ring-2 w-[400px] h-[170px]"
              : "bg-gradient-to-b flex flex-col justify-center items-center duration-500 rounded-2xl from-[#1e1e1e] to-black ring-[#0f172a] ring-2 w-[400px] h-[170px]"
          }
        >
          <h1
            className="text-5xl hover:cursor-pointer"
            onClick={() => setChoice("water")}
          >
            {water}
          </h1>
          <div className="flex items-center">
            <label className="mr-2 text-lg">Pontuação: </label>
            <input
              className="text-black py-2 px-4 rounded-full mt-2 w-[65px] text-center"
              value={weight.water || 0}
              onChange={(e) =>
                setWeight({ ...weight, water: parseInt(e.target.value) })
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center pt-8">
        <button
          onClick={() => handleNext()}
          className="shadow-2xl px-2 font-headers uppercase flex items-center mr-2 duration-300 ease-in-out xl:my-[3px] xl:px-4 xl:h-[45px] border-white border"
        >
          <h1>Próximo</h1>
        </button>
      </div>
    </main>
  );
}

function MbtiSections({
  words,
  setValues,
  values,
  step,
  setStep,
}: MbtiSectionsProps) {
  return (
    <div>
      {words.map(({ air, earth, fire, water }, i) => {
        if (step === i)
          return (
            <div key={i}>
              <MbtiWords
                air={air}
                earth={earth}
                water={water}
                fire={fire}
                setValues={setValues}
                values={values}
                step={step}
                setStep={setStep}
              />
            </div>
          );
      })}
    </div>
  );
}

const Helper = ({ step, setStep }: HelperProps) => {
  return (
    <div className="mx-36 flex flex-col items-center justify-center gap-y-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-14 text-6xl text-[#bfa15e]">COMO FUNCIONA</h1>
        <p className="font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia
          lacus pharetra diam sodales, non ultrices augue egestas. Suspendisse
          sed ultrices lacus. Cras egestas maximus euismod. Sed et mi mollis,
          porta diam eget, vulputate nunc. Aliquam eleifend tincidunt neque,
          eget tincidunt metus feugiat quis. Ut ac suscipit augue. Integer
          posuere aliquet magna ut condimentum. Mauris et viverra augue, non
          pellentesque sem. Ut ultrices sodales mauris. Ut quis mi viverra ex
          consequat placerat id vitae ex. Nulla facilisi. Pellentesque
          sollicitudin hendrerit sem vel dictum. Pellentesque convallis, ante
        </p>
      </div>
      <div>
        <button
          onClick={() => setStep(step + 1)}
          className="shadow-2xl px-2 font-headers uppercase flex items-center mr-2 duration-300 ease-in-out xl:my-[3px] xl:px-4 xl:h-[45px] border-white border"
        >
          <h1>Próximo</h1>
        </button>
      </div>
    </div>
  );
};

const Result = ({ values, id }: ResultProps) => {
  const [porcentages, setPorcentages] = useState<{
    first: "air" | "earth" | "water" | "fire";
    second: "air" | "earth" | "water" | "fire";
    third: "air" | "earth" | "water" | "fire";
    fourth: "air" | "earth" | "water" | "fire";
    firstScore: number;
    secondScore: number;
    thirdScore: number;
    fourthScore: number;
  }>({
    first: "air",
    second: "air",
    third: "air",
    fourth: "air",
    firstScore: 0,
    secondScore: 0,
    thirdScore: 0,
    fourthScore: 0,
  });

  useEffect(() => {
    const { airPorcentage, earthPorcentage, firePorcentage, waterPorcentage } =
      calculatePorcentages(values);
    const data = sortPorcentagesWithType({
      airPorcentage: parseInt(airPorcentage.toFixed(3)),
      earthPorcentage: parseInt(earthPorcentage.toFixed(3)),
      firePorcentage: parseInt(firePorcentage.toFixed(3)),
      waterPorcentage: parseInt(waterPorcentage.toFixed(3)),
    });

    async function createResultMbti() {
      await api.post(`mbti_specific/create/${id}`, {
        ...data,
        result: parseInt(id),
      });
    }

    createResultMbti();
  }, []);

  return (
    <div>
      <h1 className="text-9xl text-[#bfa15e] uppercase">{porcentages.first}</h1>
    </div>
  );
};
