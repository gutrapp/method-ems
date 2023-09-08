import { Hero } from "./Hero";
import { Method } from "./Method";
import { Phrases } from "./Phrase";
import { Tests } from "./Tests";
import { Who } from "./Who";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Who />
      <Tests />
      <Method />
      <Phrases />
    </main>
  );
};
