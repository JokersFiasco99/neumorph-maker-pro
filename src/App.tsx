import { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import PreviewCard from './components/PreviewCard';
import './App.css';

export default function App() {
  const [baseColor, setBaseColor] = useState('#cccccc');
  const [depth, setDepth] = useState(6);
  const [size, setSize] = useState(150);
  const [radius, setRadius] = useState(12);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 p-4">
      <ControlPanel
        color={baseColor}
        onColorChange={setBaseColor}
        depth={depth}
        onDepthChange={setDepth}
        size={size}
        onSizeChange={setSize}
        radius={radius}
        onRadiusChange={setRadius}
        isPressed={isPressed}
        onToggle={() => setIsPressed((p) => !p)}
      />
      <PreviewCard
        color={baseColor}
        depth={depth}
        size={size}
        radius={radius}
        isPressed={isPressed}
        onToggle={() => setIsPressed((p) => !p)}
      />
    </div>
  );
}
