// components/layout/MobileNav.tsx

import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/components/Atoms/Typography';
import { ThemeToggle } from '@/components/Molecules/ThemeToggle';


interface Props {
  open: boolean;
  onClose: () => void;
  navigation: { name: string; href: string }[];
  logged: boolean;
  onLogout: () => void;
}

export function MobileNav({ open, onClose, navigation, logged, onLogout }: Props) {
  return (
    <Dialog open={open} onClose={onClose} className="md:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Zone Fashion</span>
            <Image src="/logo.png" alt="Zone Fashion" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <button onClick={onClose} className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="mt-6 flow-root">
          <ThemeToggle />
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <Typography as="span">{item.name}</Typography>
                </Link>
              ))}
            </div>
            <div className="py-6">
              {logged ? (
                <Link href="/" onClick={onLogout}>
                  <Typography as="span" className="text-sm font-semibold text-gray-900">
                    Log out <span aria-hidden="true">→</span>
                  </Typography>
                </Link>
              ) : (
                <Link href="/login">
                  <Typography as="span" className="text-sm font-semibold text-gray-900">
                    Log in <span aria-hidden="true">→</span>
                  </Typography>
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
