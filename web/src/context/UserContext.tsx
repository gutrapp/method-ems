import React, { createContext, useState } from "react";
import { User } from "../models/user";

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const userInitialState: User = {
  id: 0,
  type: "P",
  first_name: "",
  last_name: "",
  email: "",
  age: 0,
  cpf: "",
  sex: "M",
  address: [],
  cellphone: [],
};

export const UserContext = createContext<{
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}>({
  user: userInitialState,
  setUser: () => {},
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User>(userInitialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
