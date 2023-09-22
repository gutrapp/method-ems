import { DashboardLayout } from "../../DashboardLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../../api/api";
import { User, Person } from "../../../../../models/user";

const ClinicPerson = () => {
  const { id } = useParams();

  const [people, setPeople] = useState<(User & Person)[]>([]);

  useEffect(() => {
    async function getPeople() {
      await api.get(`clinic_specific/${id}/person`).then((response) => {
        if (response.status === 200) setPeople(response.data);
      });
    }

    getPeople();
  }, []);

  return (
    <DashboardLayout>
      <main className="text-white w-full h-full">
        <div>
          <h1 className="text-3xl font-bold text-[#bfa15e] mb-12">Chaves</h1>
        </div>
        <div className=" flex flex-col gap-y-4">
          <table className="ring-2 ring-white rounded-2xl w-full h-full bg-gradient-to-b from-[#0f172a] to-black">
            <thead className="border-b-2 border-white">
              <tr className="grid grid-cols-7">
                <th className="border-r-2 border-white">Nome</th>
                <th className="border-r-2 border-white">Sobrenome</th>
                <th className="border-r-2 border-white">Email</th>
                <th className="border-r-2 border-white">CPF</th>
                <th className="border-r-2 border-white">Idade</th>
                <th>Sexo</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => {
                return (
                  <tr className="grid grid-cols-7 text-center w-full">
                    <td className="border-r-2 border-white">
                      {person.first_name}
                    </td>
                    <td className="border-r-2 border-white">
                      {person.last_name}
                    </td>
                    <td className="border-r-2 border-white">{person.email}</td>
                    <td className="border-r-2 border-white">{person.cpf}</td>
                    <td className="border-r-2 border-white">{person.age}</td>
                    <td>{person.sex}</td>
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

export default ClinicPerson;
