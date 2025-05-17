import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export default function Button({
  className,
  variant = 'default',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const variants: Record<string, string> = {
    default: 'bg-slate-900 text-white hover:bg-slate-800',
    outline: 'border border-slate-200 hover:bg-slate-100'
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}
