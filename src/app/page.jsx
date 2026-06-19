import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
export default function Home() {
  return (
<>
<div className="flex flex-col items-center">
<Header />
<main>
<About />
<Experience />
<Projects />
<ContactMe />
</main>
</div>
</>
  );
}
