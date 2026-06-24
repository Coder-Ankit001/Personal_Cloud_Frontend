import { Outlet } from 'react-router'

import { AuthProvider } from '../contexts/AuthContext'

const RootLayout = () => {
  return (
    <AuthProvider>
        <Outlet />
    </AuthProvider>
  )
}

export default RootLayout
