
import { cn } from '@/utils/cn';
import { JSX } from 'react';

type TypographyProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'small' | 'muted';
  children: React.ReactNode;
  className?: string;
};

const baseStyles = {
  h1: 'text-4xl font-bold tracking-tight',
  h2: 'text-3xl font-semibold',
  h3: 'text-xl font-medium',
  p: 'text-base leading-relaxed',
  small: 'text-sm text-gray-500',
  muted: 'text-sm text-gray-400 italic',
};

export function Typography({
  as: Tag = 'p',
  variant = 'p',
  children,
  className,
}: TypographyProps) {
  return <Tag className={cn(baseStyles[variant], className)}>{children}</Tag>;
}
