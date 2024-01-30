import styles, { layout } from "@/style";

import aboutUs from "@/assets/about-us-2.jpg";

const Business = () => (
  <>
    <section id="product" className={layout.sectionReverse}>
      <img
        src={aboutUs}
        alt="billing"
        className="w-[50%] h-[50%] mx-auto object-contain relative z-[5] rounded-3xl "
      />

      <div
        className={` red__gradient absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full  bottom-20`}
      />
      <div className="flex flex-col items-center md:items-start">
        <p className={`${styles.titleText} capitalize`}>
          Aprendizaje Interactivo
        </p>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          Sumérgete en una experiencia de aprendizaje virtual envolvente con
          nuestros cursos. Accede al contenido desde cualquier lugar y en
          cualquier momento, adaptado a tu ritmo y necesidades.
        </p>
        <p className={`${styles.titleText} capitalize`}>
          Plataforma Intuitiva y Accesible
        </p>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          Nuestra plataforma está diseñada pensando en ti, ofreciendo una
          navegación fácil e intuitiva. Aprende de manera efectiva y cómoda con
          recursos didácticos de calidad y soporte técnico dedicado.
        </p>
        <p className={`${styles.titleText} capitalize`}>
          Certificado De Asistencia
        </p>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          Aprovecha al máximo tu inversión en educación con nuestros cursos,
          respaldados por certificaciones. Obtén reconocimiento por tu
          dedicación y esfuerzo en la mejora continua de tus habilidades
          veterinarias.
        </p>
      </div>
    </section>
  </>
);

export default Business;
