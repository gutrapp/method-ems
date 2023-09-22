import { Link, useNavigate } from "react-router-dom";
import { NavItem } from "../NavItem";
import api from "../../../../api/api";
import { useEffect, useState } from "react";

export const AuthNavItems = () => {
  const router = useNavigate();

  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    async function useSession() {
      await api.get("auth/session").then((response) => {
        if (response.status === 200) setUser(!user);
      });
    }

    useSession();
  }, []);

  const handleLogout = async () => {
    await api.delete("auth/logout").then(() => {
      setUser(true);
      router("/");
    });
  };

  return user ? (
    <NavItem content="Sair" onClick={() => handleLogout()} />
  ) : (
    <Link to={"/login"}>
      <NavItem content="Entrar" />
    </Link>
  );
};
