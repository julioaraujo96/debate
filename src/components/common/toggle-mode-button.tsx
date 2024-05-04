'use client';

import { Button } from '@nextui-org/react';

interface ToggleModeButtonProps {
  theme: string | undefined;
  toggleDarkMode: () => void;
}

const ToggleModeButton: React.FC<ToggleModeButtonProps> = ({
  theme,
  toggleDarkMode,
}) => {
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
};

export default ToggleModeButton;
