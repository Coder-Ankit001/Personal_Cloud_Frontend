import { Outlet } from 'react-router';

const AuthForm = () => {
  const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}`
  return (
   <div className="flex h-dvh w-full bg-[#0d1117] text-white">

      {/* Left panel */}
      <section className="hidden lg:flex lg:w-[42%] flex-col items-center justify-center px-10 py-12 bg-[#0f1623] border-r border-indigo-500/10 relative overflow-hidden">
        
        {/* Blobs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/8" />
        <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-sky-400/6" />

        {/* Logo */}
        <div className="flex items-center gap-3 mb-12 z-10">
          <div className="w-10 h-10 rounded-xl bg-linear-to-r from-indigo-500 to-sky-400 flex items-center justify-center">
            <i className="ti ti-cloud text-white text-xl" />
          </div>
          <span className="text-xl font-medium tracking-tight">Personal Cloud</span>
        </div>

        {/* Stat cards */}
        <div className="w-full flex flex-col gap-3 z-10 mb-10">
          {[
            { icon: "ti-folder", color: "bg-indigo-500/18", iconColor: "text-indigo-400", value: "24 folders", sub: "organized automatically" },
            { icon: "ti-upload", color: "bg-sky-400/15", iconColor: "text-sky-400", value: "12.4 GB", sub: "stored securely" },
            { icon: "ti-share", color: "bg-emerald-400/15", iconColor: "text-emerald-400", value: "38 shared", sub: "with your team" },
          ].map((item) => (
            <div key={item.value} className="flex items-center gap-4 bg-white/4 border border-white/8 rounded-xl px-5 py-4">
              <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                <i className={`ti ${item.icon} ${item.iconColor} text-lg`} />
              </div>
              <div>
                <div className="text-lg font-medium text-slate-200">{item.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-600 text-center leading-relaxed z-10 max-w-55">
          Your personal cloud — fast, private, and always in sync.
        </p>
      </section>

      {/* Right panel */}
      <section className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-[60%]">
          <Outlet context={{ BACKEND_URL }}/>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
