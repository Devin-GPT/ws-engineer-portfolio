import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function useThemeToggle(): {
  theme: Theme;
  toggleTheme: () => void;
} {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
}