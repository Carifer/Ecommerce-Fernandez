import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import ItemListContainet from "./pages/itemListContainer/ItemListContainet";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainet greeting={"Hola como estas?"} />
    </div>
  );
}

export default App;
