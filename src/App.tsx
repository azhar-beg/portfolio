import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { IndustrialExperience } from "@/components/IndustrialExperience";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <Introduction />
        <About />
        <Skills />
        <IndustrialExperience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
