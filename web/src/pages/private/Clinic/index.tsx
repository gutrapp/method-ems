import { useEffect, useState } from "react";
import api from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { Clinic } from "../../../models/clinic";
import { BiHome } from "react-icons/bi";

const ClinicPage = () => {
  const router = useNavigate();

  const [clinics, setClinics] = useState<Clinic[]>([]);

  useEffect(() => {
    async function getUserClinics() {
      await api.get("auth/admin/clinic").then((response) => {
        setClinics(response.data);
      });
    }

    getUserClinics();
  }, []);

  return (
    <main className="bg-gradient-to-b px-350 py-150 flex-col from-[#0f172a] text-white flex justify-center items-center to-black w-full h-screen">
      <div className="mb-20 text-4xl font-headers">
        <h1 className="text-[#bfa15e] font-bold">SUAS CLÍNICAS</h1>
      </div>

      <div className="flex flex-row">
        {clinics.map(({ id, nome }, _) => {
          return (
            <div
              onClick={() => router(`/admin/clinic/${id}/dashboard/result`)}
              className="flex justify-center items-center flex-col ring-2 hover:text-[#bfa15e] duration-300 hover:scale-105 hover:ring-[#bfa15e] ring-white rounded-2xl px-8 py-4 hover:cursor-pointer"
            >
              <BiHome size={150} />
              <h1 className="text-xl">{nome}</h1>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ClinicPage;
