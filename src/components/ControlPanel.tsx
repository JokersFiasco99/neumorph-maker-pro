import {
  FiCopy,
  FiToggleLeft,
  FiToggleRight,
  FiRefreshCcw
} from 'react-icons/fi';
import { useNeumorph } from '../hooks/useNeumorph';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Slider } from './ui/Slider';
import { Label } from './ui/Label';

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
      <div className="flex items-center gap-2">
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="h-8 w-8 p-0 border"
        />
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="depth">Depth</Label>
        <Slider
          id="depth"
          min={1}
          max={20}
          value={depth}
          onChange={(e) => onDepthChange(Number(e.target.value))}
        />
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="size">Size</Label>
        <Slider
          id="size"
          min={100}
          max={300}
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
        />
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="radius">Radius</Label>
        <Slider
          id="radius"
          min={0}
          max={50}
          value={radius}
          onChange={(e) => onRadiusChange(Number(e.target.value))}
        />
      </div>
      <Button onClick={onToggle} className="flex items-center gap-2">
        {isPressed ? <FiToggleRight /> : <FiToggleLeft />}
        Toggle Pressed
      </Button>
      <Button onClick={copy} className="flex items-center gap-2">
        <FiCopy /> Copy CSS
      </Button>
      <Button onClick={reset} className="flex items-center gap-2">
        <FiRefreshCcw /> Reset
      </Button>
    </div>
  );
}
