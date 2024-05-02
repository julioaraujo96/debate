'use client';

import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import ToggleModeButton from './common/toggle-mode-button';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  if (!mounted) return null;

  return <ToggleModeButton theme={theme} toggleDarkMode={toggleDarkMode} />;
}
