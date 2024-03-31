import { useEffect, useContext,createContext } from "react";
const ThemeContext = createContext({
  theme: "1",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("1");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
