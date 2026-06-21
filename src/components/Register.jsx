import axios from 'axios'

import { useState } from "react"
import { useOutletContext } from "react-router"
import { useNavigate } from 'react-router';

import { ClipLoader } from "react-spinners";

const Register = () => {
  const navigate = useNavigate()
  const { BACKEND_URL } = useOutletContext() 

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()


    const handleOnSubmit = async (e)=>{
      e.preventDefault()
      setLoading(true)

      const data = { email, username, password }

      try{
        await axios.post(`${BACKEND_URL}/user/register`, data, { withCredentials: true })
        navigate("/")
      }
      catch(e){
        setError(e.response?.data?.message || 'Something went wrong')
      }
      finally{
        setLoading(false)
      }
    }

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

      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">

        {/* ------Error------ */}
        {error && (
          <div className="flex items-start gap-2.5 bg-red-500/8 border border-red-500/25 rounded-lg px-3.5 py-3 mb-4">
            <i className="ti ti-alert-circle text-red-400 text-lg mt-0.5 shrink-0" />
            <span className="text-red-300 text-sm leading-relaxed">{error}</span>
          </div>
        )}

        {/* ------Email------ */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Email</label>
          <div className="relative">
            <i
              className={`ti ti-mail absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`}
            />
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="email"
              required
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full pl-9 pr-3 py-4 bg-white/4 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
            />
          </div>
        </div>

        {/* ------Username------ */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Username</label>
          <div className="relative">
            <i
              className={`ti ti-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`}
            />
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="username"
              required
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full pl-9 pr-3 py-4 bg-white/4 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
            />
          </div>
        </div>

        {/* ------Password------ */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-slate-400">Password</label>
          <div className="relative">
            <i
              className={`ti ti-lock absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 text-base`}
            />
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="password"
              required
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full pl-9 pr-3 py-4 bg-white/4 border border-indigo-500/30 rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/15"
            />
          </div>
        </div>

        <button className="mt-2 w-full py-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white text-sm font-medium transition-colors">
          Submit
          <ClipLoader
            color='#fffff'
            loading={loading}
            size={14}
            aria-label="Loading Spinner"
            data-testid="loader"
            className='max-2'
          />
        </button>
      </form>
    </>
  );
};

export default Register;
