import styles from "@/style";

import Navbar2 from "@/components/Navbar2";

import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Courses from "@/components/courses/Courses";

import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

import Contact from "@/components/Contact";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Navbar2
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuShown={isMenuShown}
        setIsMenuShown={setIsMenuShown}
      />
      <div className="dark:bg-accent w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/courses" element={<Courses darkMode={darkMode} />} />

          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          {/*  <Route path="/faq" element={<Faq darkMode={darkMode} />} /> */}
          {/* <Route path="/terms" element={<Terms darkMode={darkMode} />} />
          <Route path="/privacy" element={<Privacy darkMode={darkMode} />} /> */}
        </Routes>

        <div
          className={`dark:bg-accent  ${isMenuShown ? "hidden" : ""}  ${
            styles.paddingX
          } ${styles.flexCenter}`}
        >
          <div className={`${styles.boxWidth}`}></div>
        </div>

        <Footer darkMode={darkMode} />
      </div>

      <div
        className={`fixed flex items-center justify-center hover:scale-110 duration-700 rounded-full w-14 h-14 bg-[#00E676] text-yellow-500 z-[100] right-6 bottom-6   `}
      >
        <a
          href="https://api.whatsapp.com/send?phone=573243291412"
          className=""
          target="_blank"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default App;
