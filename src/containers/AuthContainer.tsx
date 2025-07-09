'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isAuthenticated } from '../hooks/useAuth'


interface AuthContainerProps {
  children: React.ReactNode
}

export default function AuthContainer({ children }: AuthContainerProps) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const openRoutes = ['/login']
    if (!isAuthenticated() && !openRoutes.includes(pathname)) {
      router.replace('/login')
    }
  }, [pathname, router])

  return <>{children}</>
}
