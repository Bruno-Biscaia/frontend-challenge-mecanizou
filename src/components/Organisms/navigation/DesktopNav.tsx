import Link from 'next/link';
import { Typography } from '@/components/Atoms/Typography';
import { ThemeToggle } from '@/components/Molecules/ThemeToggle';

interface Props {
  navigation: { name: string; href: string }[];
  logged: boolean;
  onLogout: () => void;
}

export function DesktopNav({ navigation, logged, onLogout }: Props) {
  return (
    <div className="hidden md:flex md:items-center gap-4 md:flex-1 md:justify-end ">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm/6 font-semibold text-gray-900  mx-3"
        >
          <Typography as="span">{item.name}</Typography>
        </Link>
      ))}

      {logged ? (
        <Link href="/" onClick={onLogout}>
          <Typography as="span" className="text-base font-bold text-gray-900 ">
            Log out <span aria-hidden="true">→</span>
          </Typography>
        </Link>
      ) : (
        <Link href="/login">
          <Typography as="span" className="text-base font-bold text-gray-900 ">
            Log in <span aria-hidden="true"></span>
          </Typography>
        </Link>
      )}

      <div className="">
        <ThemeToggle />
      </div>
    </div>
  );
}
