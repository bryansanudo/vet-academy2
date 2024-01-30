import styles, { layout } from "@/style";

import aboutUs from "@/assets/about-us-2.jpg";

const Achieve = () => (
  <section id="product" className="">
    <div className="">
      <p className={`${styles.paragraph} mb-5 `}>
        VET Academy es una plataforma desarrollada para la educación continua de
        médicos veterinarios, estudiantes y auxiliares con el fin de aportar al
        crecimiento profesional y perfeccionamiento de habilidades técnicas.
      </p>
      <p className={`${styles.paragraph} `}>
        Nuestra metodología se basa en la formación virtual y presencial en
        áreas como, medicina interna, cirugía, anestesia, manejo del dolor,
        cuidado crítico, etología y demás especialidades; contando con la
        participación de especialistas que poseen una amplia trayectoria y
        experiencia.
      </p>
    </div>
  </section>
);

export default Achieve;
