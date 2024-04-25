import { Toaster } from "sonner";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

  return (
    <>
      <main className="Main">
        <Toaster richColors />
        <Header />
        <Presentation />
      </main>
      <Footer />
    </>
  );
}

export default App;
