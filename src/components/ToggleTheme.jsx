import React, { useEffect, useState } from 'react'
import Button from './Button';

const ToggleTheme = () => {

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.classList.remove('light', "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button onClick={() => {setTheme(theme === 'light' ? "dark" : 'light')}}>{theme === "light" ? "🌙 Switch to dark" : "☀️ Switch to light"}</Button>
  )
}

export default ToggleTheme