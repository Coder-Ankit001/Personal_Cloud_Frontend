
import Icon from "./ui/Icon.jsx";
import { ACCENT } from "../utils/theme.js";

const Sidebar = ({
  activeNav,
  onNavChange,
  navItems,
  smartFolders,
}) => {
  return (
    <aside className="
          h-full w-full
          flex flex-col gap-0.5 px-3 py-4
          bg-slate-900 border-r border-slate-700/60
          overflow-y-auto
        ">
        {/* Primary nav */}
        {navItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`
                flex items-center gap-2.5 w-full px-3 py-2 h-14
                rounded-lg text-sm text-left transition-colors duration-100
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${isActive
                  ? "bg-blue-900/40 text-blue-400 font-medium"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }
              `}
            >
              <Icon name={item.icon} className="text-base shrink-0" />
              <span className="flex-1 truncate">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-slate-700/80 text-slate-400">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
  
        {/* Smart folders section */}
        <p className="
          mt-4 mb-1 px-3
          text-[10px] font-semibold uppercase tracking-widest text-slate-600
        ">
          Smart folders
        </p>
  
        {smartFolders.map((folder) => {
          const tokens = ACCENT[folder.accent] ?? ACCENT.blue;
          return (
            <button
              key={folder.id}
              type="button"
              onClick={() => onNavChange(folder.id)}
              className="
                flex items-center gap-2.5 w-full px-3 py-2 h-14
                rounded-lg text-sm text-left text-slate-400
                hover:bg-slate-800 hover:text-slate-200
                transition-colors duration-100
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              "
            >
              <Icon name={folder.icon} className={`text-base shrink-0 ${tokens.icon}`} />
              {folder.label}
            </button>
          );
        })}
  
        {/* Storage meter — pinned to bottom */}
        <div className="mt-auto pt-4 px-2">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>Storage</span>
            <span>50 / 100 GB</span>
          </div>
          <div className="h-1 rounded-full bg-slate-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400 transition-all"
              style={{ width: `50%` }}
              role="progressbar"
              aria-valuenow='10'
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`10 GB of 20 GB used`}
            />
          </div>
          <p className="text-[10px] text-slate-600 mt-1">50% used</p>
        </div>
      </aside>
  )
}

export default Sidebar

