import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-slate-200 mb-1.5">
          Create account
        </h1>
        <p className="text-sm text-slate-500">
          Already have one?{' '}
          <a
            href="/auth/login"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Sign in
          </a>
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Email</label>
          <div className="relative">
            <i
              className={`ti ti-mail absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`}
            />
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="w-full pl-9 pr-3 py-4 bg-white/4 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Username</label>
          <div className="relative">
            <i
              className={`ti ti-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`}
            />
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e)=>setUsername(e.target.value)}
              required
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
              onChange={(e)=>setPassword(e.target.value)}
              required
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

export default Register;
