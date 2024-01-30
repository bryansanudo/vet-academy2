import React from "react";
import styles from "@/style";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { GoDot } from "react-icons/go";

import { Link, NavLink } from "react-router-dom";
import logoVet from "@/assets/vet-academy-logo.jpg";

import { IoMdArrowDropdown } from "react-icons/io";
const activeLink = ({ isActive }) =>
  isActive
    ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-primary"
    : "";

const Navbar2 = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div
        className={` ${styles.paddingX} ${
          styles.flexCenter
        } fixed  w-full z-50   ${darkMode ? "bg-[#0D0E1C]" : "bg-white"}    `}
      >
        <div className={`${styles.boxWidth} `}>
          <div
            className={`navbar ${
              darkMode ? "bg-[#0D0E1C] text-white" : "bg-white"
            } `}
          >
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className={` ${
                    darkMode ? "text-white bg-black " : "text-black bg-white "
                  } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   rounded-box w-52`}
                >
                  <Link to="/">
                    <li>
                      <a>Inicio</a>
                    </li>
                  </Link>
                  <Link to="/about">
                    <li>
                      <a>Nosotros</a>
                    </li>
                  </Link>
                  <li>
                    <a>Anestesia Veterianaria</a>
                    <ul className="p-2">
                      <li>
                        <a>Curso 1</a>
                      </li>
                      <li>
                        <a>Curso 2</a>
                      </li>
                      <li>
                        <a>Curso 3</a>
                      </li>
                      <li>
                        <a>Curso 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Endocrinología</a>
                    <ul className="p-2">
                      <li>
                        <a>Curso 1</a>
                      </li>
                      <li>
                        <a>Curso 2</a>
                      </li>
                      <li>
                        <a>Curso 3</a>
                      </li>
                      <li>
                        <a>Curso 4</a>
                      </li>
                    </ul>
                  </li>
                  <Link to="/courses">
                    <li>
                      <a>Cursos</a>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li>
                      <a>Contacto</a>
                    </li>
                  </Link>
                </ul>
              </div>
              <img src={logoVet} alt="" className="w-48  object-contain" />
            </div>
            <div className={` navbar-center hidden lg:flex`}>
              <ul className={`menu menu-horizontal px-1 `}>
                <Link to="/">
                  <li>
                    <a>Inicio</a>
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    <a>Nosotros</a>
                  </li>
                </Link>
                <li>
                  <details>
                    <summary>Anestesia Veterinaria</summary>
                    <ul
                      className={`p-2 w-[200px] ${
                        darkMode ? "text-white bg-[#0D0E1C]" : ""
                      }`}
                    >
                      <li>
                        <a>Curso 1</a>
                      </li>
                      <li>
                        <a>Curso 2</a>
                      </li>
                      <li>
                        <a>Curso 3</a>
                      </li>
                      <li>
                        <a>Curso 4</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Endocrinología</summary>
                    <ul
                      className={`p-2 w-[200px] ${
                        darkMode ? "text-white bg-[#0D0E1C]" : ""
                      }`}
                    >
                      <li>
                        <a>Curso 1</a>
                      </li>
                      <li>
                        <a>Curso 2</a>
                      </li>
                      <li>
                        <a>Curso 3</a>
                      </li>
                      <li>
                        <a>Curso 4</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <Link to="/courses">
                  <li>
                    <a>Cursos</a>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <a>Contacto</a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="flex items-center flex-row justify-center gap-2 ">
                {/* <div className="bg-gray-300 h-7 mr-2 w-[1px] hidden md:flex"></div> */}
                <div onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? (
                    <MdWbSunny
                      className={`mt-1 text-2xl hover:text-primary  cursor-pointer duration-300  `}
                    />
                  ) : (
                    <MdNightsStay
                      className={`mt-1 text-2xl hover:text-primary   cursor-pointer duration-300  `}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
