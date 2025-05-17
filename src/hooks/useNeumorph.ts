import { useMemo } from 'react';
import { hexToHsl, tint } from '../utils/color';

// Neumorphism uses two opposite shadows to create a soft extruded look.
// Raised elements have lighter top-left and darker bottom-right shadows.
// Inset elements invert this to appear pressed. We compute tinted versions
// of the base color by adjusting lightness +/-15% then offsetting by depth.
export function useNeumorph(hex: string, depth: number) {
  return useMemo(() => {
    const { h, s, l } = hexToHsl(hex);
    const light = tint(l, 15);
    const dark = tint(l, -15);
    const offset = depth;

    const raisedShadow = `${offset}px ${offset}px ${offset * 2}px hsl(${h} ${s}% ${dark}%), -${offset}px -${offset}px ${offset * 2}px hsl(${h} ${s}% ${light}%)`;
    const insetShadow = `inset ${offset}px ${offset}px ${offset * 2}px hsl(${h} ${s}% ${dark}%), inset -${offset}px -${offset}px ${offset * 2}px hsl(${h} ${s}% ${light}%)`;

    return { raisedShadow, insetShadow, h, s, l };
  }, [hex, depth]);
}

