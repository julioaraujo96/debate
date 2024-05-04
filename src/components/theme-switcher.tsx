'use client';

import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import ToggleModeButton from './common/toggle-mode-button';
import { motion, useAnimation } from 'framer-motion';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = useCallback(async () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // Animate the first icon to move up and disappear
    await controls.start({
      y: -30,
      transition: { duration: 0.5 },
      opacity: 0,
    });
    // Animate the second icon to move down and appear
    await controls.start({ y: 0, transition: { duration: 0.5 }, opacity: 1 });
  }, [controls, setTheme, theme]);

  if (!mounted) return null;

  const isDarkmode = theme === 'dark';

  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {isDarkmode ? (
          <ToggleModeButton theme={'dark'} toggleDarkMode={toggleDarkMode} />
        ) : (
          <ToggleModeButton theme={'light'} toggleDarkMode={toggleDarkMode} />
        )}
      </motion.div>
    </>
  );
}
