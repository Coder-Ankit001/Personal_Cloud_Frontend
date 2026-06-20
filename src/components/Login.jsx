import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-slate-200 mb-1.5">Sign In</h1>
        <p className="text-sm text-slate-500">
          Don't have account?{' '}
          <a
            href="/auth/register"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Register
          </a>
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Username</label>
          <div className="relative">
            <i
              className={`ti ti-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`}
            />
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full pl-9 pr-3 py-4 bg-white/4 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Password</label>
          <div className="relative">
            <i
              className={`ti ti-lock absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full pl-9 pr-3 py-4 bg-white/4 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
            />
          </div>
        </div>

        <button className="mt-2 w-full py-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white text-sm font-medium transition-colors">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
