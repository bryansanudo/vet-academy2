import styles from "@/style";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "@/utils/motion";
import { Link } from "react-router-dom";

const ImgContent = ({ img, title1, title2, children, darkMode }) => {
  return (
    <div className=" ">
      <div className="text-center mb-10 ">
        <p
          className={`md:text-4xl text-xl  font-bold capitalize ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Descubre por qué somos la opción preferida para profesionales
          veterinarios
        </p>
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex items-center justify-center  gap-6 md:gap-20  flex-col md:flex-row my-10   "
      >
        <motion.div
          className="md:w-1/2  flex flex-col items-start justify-center  "
          variants={slideIn("left", "tween", 0.2, 1)}
        >
          <figure className="relative">
            <img
              src={img}
              width={500}
              height={300}
              alt="image description"
              className="rounded-3xl  object-contain  "
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link to="/courses">
                <button className={`${styles.button} bg-primary `}>
                  ¡Todos Los Cursos!
                </button>
              </Link>
            </div>
          </figure>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex flex-col  "
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImgContent;
