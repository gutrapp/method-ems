import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { Link } from "react-router-dom";
import { NavItem } from "../NavItem";

export const AuthNavItems = () => {
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    return;
  };

  if (!user.email)
    return (
      <Link to={"/login"}>
        <NavItem content="Entrar" />
      </Link>
    );

  return (
    <div>
      <Link to={"/admin"}>
        <NavItem content="Resultados" />
      </Link>
      <NavItem content="Sair" onClick={() => handleLogout()} />
    </div>
  );
};
