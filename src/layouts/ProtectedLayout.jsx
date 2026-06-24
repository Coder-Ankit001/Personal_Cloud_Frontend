import { Outlet } from "react-router"
import { Navigate } from "react-router"

import { useAuth } from "../hooks/useAuth"

const ProtectedLayout = () => {

  const { isLoggedIn, loading } = useAuth()

  if(loading) return <div> Loading... </div>
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />
}

export default ProtectedLayout
