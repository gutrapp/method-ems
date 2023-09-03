import { JSXElement, createContext, createSignal } from "solid-js";

const adminInitialState: Admin = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  type: "GL",
  role: "AD",
};

type AdminContextProps = {
  admin: Admin;
  setAdmin: (admin: Admin) => void;
};

type AdminContextProviderProps = {
  children: JSXElement;
};

export const AdminContext = createContext<AdminContextProps>({
  admin: adminInitialState,
  setAdmin: () => {},
});

export const AdminContextProvider = ({
  children,
}: AdminContextProviderProps) => {
  const [admin, setAdmin] = createSignal<Admin>(adminInitialState);
  const context = {
    admin: admin(),
    setAdmin(admin: Admin) {
      setAdmin(admin);
    },
  };

  return (
    <AdminContext.Provider value={context}>{children}</AdminContext.Provider>
  );
};
