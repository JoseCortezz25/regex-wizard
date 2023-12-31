import { Toaster } from "sonner";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";

function App() {
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
