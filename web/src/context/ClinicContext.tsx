import { JSXElement, createContext, createSignal } from "solid-js";

const clinicInitialState: Clinic = {
  id: 0,
  nome: "",
};

type ClinicContextProps = {
  clinic: Clinic;
  setClinic: (clinic: Clinic) => void;
};

type ClinicContextProviderProps = {
  children: JSXElement;
};

export const ClinicContext = createContext<ClinicContextProps>({
  clinic: clinicInitialState,
  setClinic: () => {},
});

export const ClinicContextProvider = ({
  children,
}: ClinicContextProviderProps) => {
  const [clinic, setClinic] = createSignal<Clinic>(clinicInitialState);
  const context = {
    clinic: clinic(),
    setClinic(clinic: Clinic) {
      setClinic(clinic);
    },
  };

  return (
    <ClinicContext.Provider value={context}>{children}</ClinicContext.Provider>
  );
};
