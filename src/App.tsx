import { Benefits } from "./components/benefits/benefits";
import { Faq } from "./components/faq/faq";
import { Footer } from "./components/footer/footer";
import { FreeStudy } from "./components/freeStudy/freeStudy";
import { Landing } from "./components/landing/landing";
import { OurWork } from "./components/ourWork/ourWork";
function App() {
  return (
    <>
      <Landing />
      <Benefits />
      <OurWork />
      <Faq />
      <FreeStudy />
      <Footer />
    </>
  );
}

export default App;
