import "./App.scss";
import Header from "./components/header/Header.js";
import Hero from "./components/hero/Hero.js";
import Footer from "./components/footer/Footer.js";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";


function App() {
  const [switchBtn , setSwitchBtn] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  
  const toggleTheme = () => {
   const newTheme =  theme == "light" ? "dark" : "light"
   setTheme(newTheme);
   setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark"){
      setSwitchBtn(true);
    }
  }, [theme])

  return (
    <div className="main">
     <Header myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switchBtn} />
     <Hero myTheme={theme} />
     <Footer  myTheme={theme} />
    </div>
  );
}

export default App;
