import {
  FiCopy,
  FiToggleLeft,
  FiToggleRight,
  FiRefreshCcw
} from 'react-icons/fi';
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
          className="border rounded"
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
        />
        <span className="ml-2 text-xs font-mono">{radius}px</span>
      </label>
      <button
        onClick={onToggle}
        className="flex items-center gap-2 border rounded px-2 py-1"
      >
        {isPressed ? <FiToggleRight /> : <FiToggleLeft />}
        Toggle Pressed
      </button>
      <button
        onClick={copy}
        className="flex items-center gap-2 border rounded px-2 py-1"
      >
        <FiCopy /> Copy CSS
      </button>
      <button
        onClick={reset}
        className="flex items-center gap-2 border rounded px-2 py-1"
      >
        <FiRefreshCcw /> Reset
      </button>
    </div>
  );
}

