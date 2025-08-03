import React, { createContext, use } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

function Context() {
  const proContext = use(ThemeProvider);
  return proContext;
}

export default Context;
