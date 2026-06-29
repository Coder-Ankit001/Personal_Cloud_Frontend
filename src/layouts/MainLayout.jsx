import { useState } from "react";
import { Outlet } from "react-router";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


import {
  NAV_ITEMS,
  SMART_FOLDERS,
} from "../data/data.js";

function MainLayout() {

  const [activeNav, setActiveNav] = useState("dashboard")

  return (
    <>
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-slate-900/98 text-white">
    {/* ---------------------------------- N a v b a r ---------------------------------- */}
      <Navbar/>
      <div className="flex flex-1 min-h-0">
        
        {/* ---------------------------------- S i d e b a r ---------------------------------- */}
        <Sidebar
          activeNav={activeNav}
          onNavChange={setActiveNav}
          navItems={NAV_ITEMS}
          smartFolders={SMART_FOLDERS}
          />
        {/* ---------------------------------- C o n t e n t ---------------------------------- */}
        <Outlet/>
      </div>
    </div>
    </>
  );
}

export default MainLayout;
