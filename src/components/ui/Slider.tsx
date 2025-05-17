import { cn } from '../../lib/utils';
import { InputHTMLAttributes } from 'react';

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Slider({ className, ...props }: SliderProps) {
  return (
    <input
      type="range"
      className={cn('w-full cursor-pointer accent-primary', className)}
      {...props}
    />
  );
}
