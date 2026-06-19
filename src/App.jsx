import "./App.css";

import { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


import {
  NAV_ITEMS,
  SMART_FOLDERS,
} from "./data/data.js";

function App() {

  const [activeNav, setActiveNav] = useState("dashboard")

  return (
    <>
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-slate-900/90 text-white">
      <Navbar/>
      <div className="h-screen flex">
        <section className="hidden lg:flex lg:w-[30vw] md:hidden bg-amber-300">
          <Sidebar
            activeNav={activeNav}
            onNavChange={setActiveNav}
            navItems={NAV_ITEMS}
            smartFolders={SMART_FOLDERS}
          />
        </section>
        <section className="w-full lg:w-[70vw] bg-amber-400 flex justify-center items-center">
          <Content /> 
        </section>
      </div>
    </div>
    </>
  );
}

export default App;
