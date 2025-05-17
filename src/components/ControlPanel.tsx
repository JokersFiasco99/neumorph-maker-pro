import {
  FiCopy,
  FiToggleLeft,
  FiToggleRight,
  FiRefreshCcw
} from 'react-icons/fi';
import Button from './ui/Button';
import { useNeumorph } from '../hooks/useNeumorph';

interface Props {
  color: string;
  onColorChange: (newColor: string) => void;
  depth: number;
  onDepthChange: (newDepth: number) => void;
  size: number;
  onSizeChange: (newSize: number) => void;
  radius: number;
  onRadiusChange: (newRadius: number) => void;
  isPressed: boolean;
  onToggle: () => void;
}

export default function ControlPanel({
  color,
  onColorChange,
  depth,
  onDepthChange,
  size,
  onSizeChange,
  radius,
  onRadiusChange,
  isPressed,
  onToggle
}: Props) {
  const { raisedShadow, insetShadow } = useNeumorph(color, depth);

  const copy = () => {
    const shadow = isPressed ? insetShadow : raisedShadow;
    const css = `box-shadow: ${shadow}; border-radius: ${radius}px;`;
    navigator.clipboard.writeText(css);
  };

  const reset = () => {
    onColorChange('#cccccc');
    onDepthChange(6);
    onSizeChange(150);
    onRadiusChange(12);
    if (isPressed) onToggle();
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/3">
      <label className="flex items-center gap-2">
        <span>Color</span>
        <input
          aria-label="Color"
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="h-8 w-8 rounded-md border border-slate-200"
        />
        <span className="ml-2 text-xs font-mono">{color}</span>
      </label>
      <label className="flex items-center gap-2">
        <span>Depth</span>
        <input
          aria-label="Depth"
          type="range"
          min="1"
          max="20"
          value={depth}
          onChange={(e) => onDepthChange(Number(e.target.value))}
          className="flex-1 accent-slate-900"
        />
        <span className="ml-2 text-xs font-mono">{depth}px</span>
      </label>
      <label className="flex items-center gap-2">
        <span>Size</span>
        <input
          aria-label="Size"
          type="range"
          min="100"
          max="300"
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className="flex-1 accent-slate-900"
        />
        <span className="ml-2 text-xs font-mono">{size}px</span>
      </label>
      <label className="flex items-center gap-2">
        <span>Radius</span>
        <input
          aria-label="Radius"
          type="range"
          min="0"
          max="50"
          value={radius}
          onChange={(e) => onRadiusChange(Number(e.target.value))}
          className="flex-1 accent-slate-900"
        />
        <span className="ml-2 text-xs font-mono">{radius}px</span>
      </label>
      <Button onClick={onToggle} className="flex items-center gap-2" variant="outline">
        {isPressed ? <FiToggleRight /> : <FiToggleLeft />}
        Toggle Pressed
      </Button>
      <Button onClick={copy} className="flex items-center gap-2" variant="outline">
        <FiCopy /> Copy CSS
      </Button>
      <Button onClick={reset} className="flex items-center gap-2" variant="outline">
        <FiRefreshCcw /> Reset
      </Button>
    </div>
  );
}

