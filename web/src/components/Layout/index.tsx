import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col">
      <header className="z-10">
        <Header />
      </header>
      <main>{children}</main>
      <footer className="z-10">
        <Footer />
      </footer>
    </main>
  );
};
