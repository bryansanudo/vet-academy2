import styles from "@/style";

import Business from "@/components/home/Business";

import Advantages from "@/components/home/Advantages";

import HeroSection from "@/components/home/HeroSection";
import ImgContentAbout from "@/components/about/ImgContentAbout";
import content from "@/assets/about-us-2.jpg";
import Achieve from "@/components/about/Achieve";

import CTA from "@/components/CTA";
import { useEffect } from "react";

const About = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter} mt-20`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="scrol" className="pt-20" />
          <ImgContentAbout
            img={content}
            title1="titulo1"
            title2="titulo2"
            darkMode={darkMode}
          >
            <p className={`${styles.titleText} capitalize`}>
              Innovando en la Educación Veterinaria
            </p>

            <p className={`${styles.subtitle} `}>
              VET Academy es una plataforma desarrollada para la educación
              continua de médicos veterinarios, estudiantes y auxiliares con el
              fin de aportar al crecimiento profesional y perfeccionamiento de
              habilidades técnicas.
            </p>
            <p className={`${styles.titleText} capitalize`}>
              Un Enfoque Integral para tu Desarrollo Profesional
            </p>

            <p className={`${styles.subtitle} `}>
              Nuestra metodología se basa en la formación virtual y presencial
              en áreas como, medicina interna, cirugía, anestesia, manejo del
              dolor, cuidado crítico, etología y demás especialidades; contando
              con la participación de especialistas que poseen una amplia
              trayectoria y experiencia.
            </p>
          </ImgContentAbout>
          <h2>galeria de profesionales</h2>
          {/*   <div className="text-center mb-10">
            <p className="md:text-3xl text-xl text-gray-400 font-bold capitalize">
              titulo 1
            </p>
          </div>
          <Business darkMode={darkMode} /> */}

          <div
            className={`
               pink__gradient absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full `}
          />
          {/* <Ally /> */}
          {/* <Practices darkMode={darkMode} /> */}
          {/*      <Services darkMode={darkMode} /> */}
          {/* <Advantages darkMode={darkMode} /> */}
          {/*  <Timeline darkMode={darkMode} /> */}
          {/*  <Clients /> */}
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default About;
