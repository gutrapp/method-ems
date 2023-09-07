import React, { createContext, useState } from "react";

type AdminContextProviderProps = {
  children: React.ReactNode;
};

export const adminInitialState: Admin = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

export const AdminContext = createContext<{
  admin: Admin;
  setAdmin: React.Dispatch<React.SetStateAction<Admin>>;
}>({
  admin: adminInitialState,
  setAdmin: () => {},
});

export const AdminContextProvider = ({
  children,
}: AdminContextProviderProps) => {
  const [admin, setAdmin] = useState<Admin>(adminInitialState);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
