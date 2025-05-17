import ColorLib from 'colorjs.io';

// Cast to any to avoid type issues with colorjs.io definitions
const Color: any = ColorLib as any;

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const c = new Color(hex);
  const { h, s, l } = c.hsl;
  return { h, s: s * 100, l: l * 100 };
}

export function hslToHex(h: number, s: number, l: number): string {
  const c = new Color('hsl', [h, s / 100, l / 100]);
  return c.to('hex').toString();
}

export function tint(l: number, amount: number): number {
  return Math.max(0, Math.min(100, l + amount));
}

