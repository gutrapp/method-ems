import { LoginBanner } from "./LoginBanner";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <main className="xl:text-xl font-sans font-semibold text-white">
      <div className="xl:grid xl:grid-cols-2 flex flex-col-reverse w-full">
        <LoginForm />
        <LoginBanner />
      </div>
    </main>
  );
};
