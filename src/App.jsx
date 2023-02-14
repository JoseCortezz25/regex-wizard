import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import Presentation from "./components/Presentation/Presentation";

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
