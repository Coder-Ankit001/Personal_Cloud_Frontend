import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

import Icon from "./ui/Icon.jsx";
import IconButton from "./ui/IconButton.jsx";

import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
  const [profile, setProfile] = useState(false)

  const navigate = useNavigate()

  const { logout, user } = useAuth()

  const handleLogout = async () => {
    await logout()
    navigate("/auth")
  }

  return (
    <header className="
      flex items-center gap-4 px-5
      bg-slate-900 border-b border-slate-700/60 h-14 shrink-0
    ">
      {/* Logo */}
      <div className="flex items-center gap-3 z-10 w-[29vw]">
        <div className="w-10 h-10 rounded-xl bg-linear-to-r from-indigo-500 to-sky-400 flex items-center justify-center">
          <i className="ti ti-cloud text-white text-xl" />
        </div>
        <Link to='/'><span className="text-md lg:text-lg font-medium tracking-tight">Personal Cloud</span></Link>
      </div>

      {/* Search */}
      <div className="relative flex-1 max-w-lg">
        <Icon
          name="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search files and folders…"
          className="
            w-full pl-9 pr-3 py-1.5 rounded-lg text-sm
            bg-slate-800 border border-slate-700 text-slate-200
            placeholder:text-slate-500
            focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40
            transition-colors
          "
        />
      </div>

      {/* Right actions */}
      <div className="relative ml-auto flex items-center gap-1">
        <IconButton icon="bell"     label="Notifications" />

        {/* Profile dropdown */}
        {profile && (
          <div className="absolute right-0 top-10 w-52 bg-slate-900/60 border border-slate-700/60 rounded-xl shadow-lg z-50 overflow-hidden">
            
            {/* User info */}
            <div className="px-4 py-3 border-b border-slate-700/60">
              <p className="text-sm font-medium text-slate-200">{user.username}</p>
              <p className="text-xs text-slate-500 mt-0.5">{user.email}</p>
            </div>

            {/* Options */}
            <div className="py-1">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 transition-colors">
                <i className="ti ti-user text-slate-400 text-base" />
                Profile
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 transition-colors">
                <i className="ti ti-settings text-slate-400 text-base" />
                Settings
              </button>
            </div>
            
            {/* Logout */}
            <div className="border-t border-slate-700/60 py-1">
              <button 
              onClick={handleLogout}
              className="
              w-full flex items-center gap-3 
              px-4 py-2.5 text-sm text-red-400 
              hover:bg-red-500/10 transition-colors
              "
              >
                <i className="ti ti-logout text-red-400 text-base" />
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Avatar */}
        <button
          type="button"
          aria-label="Account menu"
          onClick={()=>setProfile(!profile)}
          className="
            ml-1 w-8 h-8 rounded-full
            bg-violet-900/60 border-2 border-violet-500/70
            text-violet-300 text-xs font-semibold
            flex items-center justify-center
            hover:border-violet-400 transition-colors
          "
        >
          AC
        </button>
      </div>
    </header>
  )
}

export default Navbar
