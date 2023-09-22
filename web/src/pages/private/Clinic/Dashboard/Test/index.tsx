import { useEffect, useState } from "react";
import { Mbti } from "../../../../../models/mbti";
import { DashboardLayout } from "../../DashboardLayout";
import { useParams } from "react-router-dom";
import api from "../../../../../api/api";

const ClinicTest = () => {
  const { id } = useParams();

  const [mbtis, setMbtis] = useState<Mbti[]>([]);

  useEffect(() => {
    async function getResults() {
      await api.get(`clinic_specific/${id}/mbti`).then((response) => {
        if (response.status === 200) setMbtis(response.data);
      });
    }

    getResults();
  }, []);

  return (
    <DashboardLayout>
      <main className="text-white w-full text-sm h-full">
        <div>
          <h1 className="text-3xl font-bold text-[#bfa15e] mb-12">Chaves</h1>
        </div>
        <div className=" flex flex-col gap-y-4">
          <table className="ring-2 ring-white rounded-2xl h-full bg-gradient-to-b from-[#0f172a] to-black">
            <thead className="border-b-2 border-white">
              <tr className="grid grid-cols-7">
                <th className="border-r-2 border-white">Primeiro</th>
                <th className="border-r-2 border-white">Segundo</th>
                <th className="border-r-2 border-white">Terceiro</th>
                <th className="border-r-2 border-white">
                  Porcentagem do Primeiro
                </th>
                <th className="border-r-2 border-white">
                  Porcentagem do Segundo
                </th>
                <th>Porcentagem do Terceiro</th>
              </tr>
            </thead>
            <tbody>
              {mbtis.map((result) => {
                return (
                  <tr className="grid grid-cols-7 text-center w-full">
                    <td className="border-r-2 border-white">{result.first}</td>
                    <td className="border-r-2 border-white">{result.second}</td>
                    <td className="border-r-2 border-white">{result.third}</td>
                    <td className="border-r-2 border-white">
                      {result.firstScore}
                    </td>
                    <td className="border-r-2 border-white">
                      {result.secondScore}
                    </td>
                    <td>{result.thirdScore}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default ClinicTest;
