'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { GSAPBackground } from '@/components/ParallaxBackground/GSAPBackground';

type Preset = {
  name: string;
  baseColor: { light: string; dark: string };
  accentColor: { light: string; dark: string };
};

const presets: Preset[] = [
  {
    name: 'Ocean',
    baseColor: { light: '#f0f9ff', dark: '#082f49' },
    accentColor: { light: '#0ea5e9', dark: '#38bdf8' },
  },
  {
    name: 'Sunset',
    baseColor: { light: '#fff7ed', dark: '#431407' },
    accentColor: { light: '#f97316', dark: '#fb923c' },
  },
  {
    name: 'Forest',
    baseColor: { light: '#f0fdf4', dark: '#052e16' },
    accentColor: { light: '#22c55e', dark: '#4ade80' },
  },
  {
    name: 'Lavender',
    baseColor: { light: '#faf5ff', dark: '#3b0764' },
    accentColor: { light: '#a855f7', dark: '#c084fc' },
  },
];

export default function DemoPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [settings, setSettings] = useState({
    particleCount: 30,
    enableParticles: true,
    enableGrid: true,
    enableScanLine: true,
    enableOrbs: true,
    reducedMotion: false,
    currentPreset: 0,
  });

  // Only render UI when mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentPreset = presets[settings.currentPreset];

  return (
    <GSAPBackground
      particleCount={settings.particleCount}
      baseColor={currentPreset.baseColor}
      accentColor={currentPreset.accentColor}
      enableParticles={settings.enableParticles}
      enableGrid={settings.enableGrid}
      enableScanLine={settings.enableScanLine}
      enableOrbs={settings.enableOrbs}
      reducedMotion={settings.reducedMotion}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-background/80 border-border/50">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>GSAP Parallax Background</CardTitle>
                  <CardDescription>
                    Interactive demo of the GSAP-powered parallax background
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="ml-4"
                >
                  {theme === 'dark' ? '☀️ Light' : '🌙 Dark'} Mode
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Preset Selector */}
                <div>
                  <Label className="block mb-2">Presets</Label>
                  <div className="flex flex-wrap gap-2">
                    {presets.map((preset, index) => (
                      <Button
                        key={preset.name}
                        variant={settings.currentPreset === index ? 'default' : 'outline'}
                        size="sm"
                        onClick={() =>
                          setSettings({ ...settings, currentPreset: index })
                        }
                      >
                        {preset.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Particle Count Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Particle Count: {settings.particleCount}</Label>
                    <Switch
                      id="enable-particles"
                      checked={settings.enableParticles}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, enableParticles: checked })
                      }
                    />
                  </div>
                  <Slider
                    value={[settings.particleCount]}
                    min={10}
                    max={100}
                    step={5}
                    onValueChange={(value) =>
                      setSettings({ ...settings, particleCount: value[0] })
                    }
                    disabled={!settings.enableParticles}
                  />
                </div>

                {/* Toggles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enable-grid"
                      checked={settings.enableGrid}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, enableGrid: checked })
                      }
                    />
                    <Label htmlFor="enable-grid">Grid Overlay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enable-scanline"
                      checked={settings.enableScanLine}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, enableScanLine: checked })
                      }
                    />
                    <Label htmlFor="enable-scanline">Scan Line</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enable-orbs"
                      checked={settings.enableOrbs}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, enableOrbs: checked })
                      }
                    />
                    <Label htmlFor="enable-orbs">Gradient Orbs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="reduced-motion"
                      checked={settings.reducedMotion}
                      onCheckedChange={(checked) =>
                        setSettings({ ...settings, reducedMotion: checked })
                      }
                    />
                    <Label htmlFor="reduced-motion">Reduced Motion</Label>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-4">How to Use</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>
                      {`import { GSAPBackground } from '@/components/ParallaxBackground/GSAPBackground';

export default function YourComponent() {
  return (
    <GSAPBackground
      particleCount={30}
      baseColor={{ light: '#f8fafc', dark: '#0f172a' }}
      accentColor={{ light: '#3b82f6', dark: '#818cf8' }}
      enableParticles={true}
      enableGrid={true}
      enableScanLine={true}
      enableOrbs={true}
      reducedMotion={false}
      className="min-h-screen"
    >
      {/* Your content here */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Your Content</h1>
      </div>
    </GSAPBackground>
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </GSAPBackground>
  );
}
