'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isAuthenticated, logout } from '@/hooks/useAuth';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import logo from '../../public/logo.png'
import { ThemeToggle } from '@/components/ThemeToggle';

interface Props {
  children: ReactNode;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Catálogo', href: '/products' },
]


export default function Container({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logged, setLogged] = useState(false);

  // Hidratação e estado de autenticação
  useEffect(() => {
    setMounted(true);
    setLogged(isAuthenticated());
  }, []);



  useEffect(() => {
    if (mounted && logged && pathname === '/login') {
      router.replace('/products');
    }
  }, [mounted, logged, pathname, router]);

  if (!mounted) return null;

  function handleLogout() {
    logout();
    setLogged(false);    // força o estado a false
  }



  return (

    <div className="bg-white overflow-y-hidden">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-10">

          {/* LOGO */}
          <div className="flex md:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Zone Fashion</span>
              <img
                alt=""
                src={logo.src ?? ""}
                className="h-10 w-auto"
              />
            </a>
          </div>

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
          <div className="hidden md:flex md:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            {logged ? (
              <Link onClick={handleLogout} href="/">
                <div className="text-sm font-semibold text-gray-900">
                  Log out <span aria-hidden="true">→</span>
                </div>
              </Link>
            ) : (
              <Link href="/login">
                <div className="text-sm font-semibold text-gray-900">
                  Log in <span aria-hidden="true">→</span>
                </div>
              </Link>
            )}
          </div>
          <div className='ml-4'>
            <ThemeToggle />
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Zone Fashion</span>
                <img
                  alt=""
                  src={logo.src ?? ""}
                  className="h-10 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  {logged ? (
                    <a onClick={handleLogout} href="/">
                      <div className="text-sm font-semibold text-gray-900">
                        Log out <span aria-hidden="true">→</span>
                      </div>
                    </a>
                  ) : (
                    <a href="/login">
                      <div className="text-sm font-semibold text-gray-900">
                        Log in <span aria-hidden="true">→</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main>
        {children}
      </main>

    </div>


  )
}
