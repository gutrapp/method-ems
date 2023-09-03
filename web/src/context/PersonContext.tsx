import { JSXElement, createContext, createSignal } from "solid-js";
import { Person } from "../models/Person/type";

const personInitialState: Person = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  age: 0,
  cpf: "",
  sex: "M",
};

type PersonContextProps = {
  person: Person;
  setPerson: (person: Person) => void;
};

type PersonContextProviderProps = {
  children: JSXElement;
};

export const PersonContext = createContext<PersonContextProps>({
  person: personInitialState,
  setPerson: () => {},
});

export const PersonContextProvider = ({
  children,
}: PersonContextProviderProps) => {
  const [person, setPerson] = createSignal<Person>(personInitialState);
  const context = {
    person: person(),
    setPerson(person: Person) {
      setPerson(person);
    },
  };

  return (
    <PersonContext.Provider value={context}>{children}</PersonContext.Provider>
  );
};
