'use client'

import { ReactNode, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { isAuthenticated, logout } from '@/hooks/useAuth'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'
import { DesktopNav } from './components/DesktopNav'
import { MobileNav } from './components/MobileNav'


interface Props {
  children: ReactNode
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Catálogo', href: '/products' },
]

export default function Container({ children }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    setMounted(true)
    setLogged(isAuthenticated())
  }, [])

  useEffect(() => {
    setLogged(isAuthenticated())
  }, [pathname])

  useEffect(() => {
    if (mounted && logged && pathname === '/login') {
      router.replace('/products')
    }
  }, [mounted, logged, pathname, router])

  if (!mounted) return null

  function handleLogout() {
    logout()
    router.replace('/')
  }

  return (
    <div className="bg-white overflow-y-hidden">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-10"
        >
          {/* Logo */}
          <div className="flex md:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Zone Fashion</span>
              <Image
                src={logo}
                alt="Zone Fashion"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Botão mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Navegação desktop + ThemeToggle */}
          <DesktopNav
            navigation={navigation}
            logged={logged}
            onLogout={handleLogout}
          />
        </nav>

        {/* Menu lateral mobile */}
        <MobileNav
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          navigation={navigation}
          logged={logged}
          onLogout={handleLogout}
        />
      </header>

      <main>{children}</main>
    </div>
  )
}
