import { motion } from '@motionone/react';
import { useNeumorph } from '../hooks/useNeumorph';
import { CSSProperties } from 'react';

interface Props {
  color: string;
  depth: number;
  size: number;
  radius: number;
  isPressed: boolean;
  onToggle: () => void;
}

export default function PreviewCard({
  color,
  depth,
  size,
  radius,
  isPressed,
  onToggle
}: Props) {
  const { raisedShadow, insetShadow, h, s, l } = useNeumorph(color, depth);

  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: radius,
    '--neu-h': h,
    '--neu-s': `${s}%`,
    '--neu-l': `${l}%`,
    '--neu-depth': `${depth}px`,
    '--neu-radius': `${radius}px`,
    '--neu-raised': raisedShadow,
    '--neu-inset': insetShadow
  } as CSSProperties;

  const handlePointerDown = () => {
    timeout = setTimeout(() => {
      navigator.clipboard.writeText(`box-shadow: ${
        isPressed ? insetShadow : raisedShadow
      };`);
    }, 600);
  };

  let timeout: ReturnType<typeof setTimeout>;
  const handlePointerUp = () => {
    clearTimeout(timeout);
  };

  return (
    <motion.div
      data-testid="card"
      style={style}
      onClick={onToggle}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      animate={{ boxShadow: isPressed ? insetShadow : raisedShadow }}
      className="shadow-neumorph flex items-center justify-center select-none"
    >
      {isPressed ? 'Pressed' : 'Raised'}
    </motion.div>
  );
}

