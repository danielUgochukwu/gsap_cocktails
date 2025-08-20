import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar, Hero, Cocktails, About } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <main>
       <Navbar/>
       <Hero/>
       <Cocktails/>
       <About/>
   </main>
  );
};
export default App;
