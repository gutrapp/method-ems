import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const router = useNavigate();

  useEffect(() => {
    router("/");
  }, []);

  return <main></main>;
};
