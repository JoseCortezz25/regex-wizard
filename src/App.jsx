import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Presentation from "./components/Presentation/Presentation";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <main className="Main">
        <Header />
        <Presentation />
      </main>
      <Footer />
    </>
  );
}

export default App;
