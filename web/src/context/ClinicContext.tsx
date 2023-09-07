import React, { createContext, useState } from "react";

type ClinicContextProviderProps = {
  children: React.ReactNode;
};

export const clinicInitialState: Clinic = {
  id: 0,
  nome: "",
};

export const ClinicContext = createContext<{
  clinic: Clinic;
  setClinic: React.Dispatch<React.SetStateAction<Clinic>>;
}>({
  clinic: clinicInitialState,
  setClinic: () => {},
});

export const ClinicContextProvider = ({
  children,
}: ClinicContextProviderProps) => {
  const [clinic, setClinic] = useState<Clinic>(clinicInitialState);

  return (
    <ClinicContext.Provider value={{ clinic, setClinic }}>
      {children}
    </ClinicContext.Provider>
  );
};
