import Icon from "./ui/Icon.jsx";
import IconButton from "./ui/IconButton.jsx";

const Navbar = () => {
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
        <span className="text-md lg:text-lg font-medium tracking-tight">Personal Cloud</span>
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
      <div className="ml-auto flex items-center gap-1">
        <IconButton icon="bell"     label="Notifications" />
        <IconButton icon="settings" label="Settings" />

        {/* Avatar */}
        <button
          type="button"
          aria-label="Account menu"
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
