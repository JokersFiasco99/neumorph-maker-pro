import { FiCopy, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

interface Props {
  color: string;
  onColorChange: (v: string) => void;
  depth: number;
  onDepthChange: (v: number) => void;
  size: number;
  onSizeChange: (v: number) => void;
  radius: number;
  onRadiusChange: (v: number) => void;
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
  const copy = () => {
    navigator.clipboard.writeText(document.documentElement.style.cssText);
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-1/3">
      <label className="flex items-center gap-2">
        <span>Color</span>
        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="border rounded"
        />
      </label>
      <label className="flex items-center gap-2">
        <span>Depth</span>
        <input
          type="range"
          min="1"
          max="20"
          value={depth}
          onChange={(e) => onDepthChange(Number(e.target.value))}
        />
      </label>
      <label className="flex items-center gap-2">
        <span>Size</span>
        <input
          type="range"
          min="100"
          max="300"
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
        />
      </label>
      <label className="flex items-center gap-2">
        <span>Radius</span>
        <input
          type="range"
          min="0"
          max="50"
          value={radius}
          onChange={(e) => onRadiusChange(Number(e.target.value))}
        />
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
    </div>
  );
}

