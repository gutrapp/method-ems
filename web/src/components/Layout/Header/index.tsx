import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./NavItem";
import { AuthNavItems } from "./AuthNavItems";

export const Header = () => {
  const { pathname } = useLocation();

  const [trigger, setTrigger] = useState<boolean>(false);
  const [fixed, setFixed] = useState<boolean>(false);

  const handleTrigger = () => {
    setTrigger(window.scrollY >= 95);
  };

  useEffect(() => {
    if (pathname !== "/") setFixed(true);
  }, []);

  window.addEventListener("scroll", handleTrigger);

  return (
    <header
      className={
        trigger
          ? "font-headers bg-[#1e2123] text-lg font-bold w-full hidden lg:flex lg:fixed text-white opacity-75 shadow-2xl duration-500"
          : fixed
          ? "font-headers bg-[#1e2123] text-lg font-bold w-full hidden lg:flex lg:fixed text-white opacity-75 shadow-2xl duration-500"
          : "font-headers pt-[56px] text-lg w-full hidden lg:flex lg:fixed font-bold text-white duration-500"
      }
    >
      <div className="mx-[200px] flex w-full h-[85px] items-center justify-between uppercase tracking-[2px]">
        <div>
          <Link to={"/"}>
            <h1 className="flex text-4xl">
              JEAN <h1 className="text-[#bfa15e]">CARLO</h1>
            </h1>
          </Link>
        </div>
        <div>
          <NavItem href="#service" content="Serviços" />
          <Link to={"/tests"}>
            <NavItem content="Testes" />
          </Link>
          <NavItem href="#contact" content="Contato" />
          <AuthNavItems />
        </div>
      </div>
    </header>
  );
};
