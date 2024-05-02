'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant='light'
      size='lg'
      disableRipple
      isIconOnly
      onClick={toggleDarkMode}
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </Button>
  );
}
