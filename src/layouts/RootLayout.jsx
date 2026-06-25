import { Outlet } from 'react-router'

import { AuthProvider } from '../contexts/AuthContext'
import { FileSystemProvider } from '../contexts/FIleSystemContext'

const RootLayout = () => {
  return (
    <FileSystemProvider>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </FileSystemProvider>
  )
}

export default RootLayout
