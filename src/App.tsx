import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.tsx";
import Main from "./Components/Main/Main.tsx";
import Footer from "./Components/Footer/Footer.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
