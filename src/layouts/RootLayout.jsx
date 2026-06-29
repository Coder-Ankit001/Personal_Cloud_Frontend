import { Outlet } from 'react-router'

import { AuthProvider } from '../contexts/AuthContext'
import { FileSystemProvider } from '../contexts/FileSystemContext'

const RootLayout = () => {
  return (
    <AuthProvider>
      <FileSystemProvider>
        <Outlet />
      </FileSystemProvider>
    </AuthProvider>
  )
}

export default RootLayout
