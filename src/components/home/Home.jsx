import styles from "@/style";

import Business from "@/components/home/Business";

import Advantages from "@/components/home/Advantages";

import HeroSection from "@/components/home/HeroSection";
import ImgContent from "@/components/ImgContent";
import content from "@/assets/about-us-2.jpg";
import Achieve from "@/components/about/Achieve";

import CTA from "@/components/CTA";
import { useEffect } from "react";

const Home = ({ darkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`dark:bg-accent  ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection darkMode={darkMode} />
        </div>
      </div>

      <div
        className={`dark:bg-accent  ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <div name="scrol" className="pt-20" />
          <ImgContent
            img={content}
            title1="titulo1"
            title2="titulo2"
            darkMode={darkMode}
          >
            <p className={`${styles.titleText} capitalize`}>
              Aprendizaje Interactivo
            </p>

            <p className={`${styles.subtitle} `}>
              Sumérgete en una experiencia de aprendizaje virtual envolvente con
              nuestros cursos. Accede al contenido desde cualquier lugar y en
              cualquier momento, adaptado a tu ritmo y necesidades.
            </p>
            <p className={`${styles.titleText} capitalize`}>
              Plataforma Intuitiva y Accesible
            </p>

            <p className={`${styles.subtitle} `}>
              Nuestra plataforma está diseñada pensando en ti, ofreciendo una
              navegación fácil e intuitiva. Aprende de manera efectiva y cómoda
              con recursos didácticos de calidad y soporte técnico dedicado.
            </p>
            <p className={`${styles.titleText} capitalize`}>
              Certificado de Asistencia
            </p>

            <p className={`${styles.subtitle}  `}>
              Aprovecha al máximo tu inversión en educación con nuestros cursos,
              respaldados por certificaciones. Obtén reconocimiento por tu
              dedicación y esfuerzo en la mejora continua de tus habilidades
              veterinarias.
            </p>
          </ImgContent>
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
          <Advantages darkMode={darkMode} />
          {/*  <Timeline darkMode={darkMode} /> */}
          {/*  <Clients /> */}
          <CTA darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Home;
