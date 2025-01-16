import { Feather } from "lucide-react";
import { useState } from "react";

export const NavBar = ({
  isNavbarTransparent,
  ofrecimientosRef,
  inicioRef,
  contactoRef
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function handleScrollTo(ref) {
    const element = ref.current;
    if (element) {
      window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
    }
  }

  function getNavBarClassname(text) {
    if (isOpen) {
      return text + "-black";
    } else {
      if (isNavbarTransparent) {
        return text + "-white";
      }
      return text + "-black";
    }
  }

  return (
    <header className="w-full">
      <div
        className={`${
          isNavbarTransparent ? "bg-transparent" : " bg-white"
        }  w-full flex justify-between z-100 top-0 fixed transition duration-[250ms] ease-in flex-col sm:flex-row lg:items-center sm:py-5 sm:px-10  `}
      >
        <div className="flex items-center gap-1">
          <h1
            className={`${getNavBarClassname(
              "text"
            )} hidden sm:block font-medium text-3xl font-Carattere items-center`}
          >
            Benitez de Filiaci
          </h1>
          <Feather
            color={`${isNavbarTransparent ? "#ffffff" : "#000000"}`}
            className="hidden xl:block"
          />
        </div>
        <div className="hidden md:flex gap-y-4 gap-x-9">
          <a
            href="#inicio"
            onClick={() => {
              handleScrollTo(inicioRef);
            }}
            className={`${
              isNavbarTransparent ? "text-white" : "text-black"
            } font-normal font-Poppins hover:underline underline-offset-[14px]`}
          >
            Inicio
          </a>
          <a
            href="#servicio"
            onClick={() => {
              handleScrollTo(ofrecimientosRef);
            }}
            className={`${
              isNavbarTransparent ? "text-white" : "text-black"
            } font-normal  font-Poppins hover:underline underline-offset-[14px]`}
          >
            Servicio
          </a>
          <a
            href="#contacto"
            onClick={() => {
              handleScrollTo(contactoRef);
            }}
            className={`${
              isNavbarTransparent ? "text-white" : "text-black"
            } font-normal  font-Poppins hover:underline underline-offset-[14px]`}
          >
            Contacto
          </a>

          <a
            href="https://www.google.com.ar/maps/@-31.3416731,-64.3016578,4279m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D"
            onClick={() => {
              handleScrollTo(contactoRef);
            }}
            className={`${
              isNavbarTransparent ? "text-white" : "text-black"
            } font-normal  font-Poppins hover:underline underline-offset-[14px]`}
          >
            Mapa
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-end justify-center focus:outline-none text-white gap-1.5 p-5"
        >
          <span
            className={`block w-6 h-0.5 ${getNavBarClassname(
              "bg"
            )} transition-transform ${isOpen && "rotate-45 translate-y-2 "}`}
          ></span>
          <span
            className={`block w-6 h-0.5 ${getNavBarClassname(
              "bg"
            )} transition-opacity ${isOpen && "opacity-0 "}`}
          ></span>
          <span
            className={`block w-6 h-0.5 ${getNavBarClassname(
              "bg"
            )} transition-transform ${isOpen && "-rotate-45 -translate-y-2 "}`}
          ></span>
        </button>

        <div
          className={`md:hidden bg-white transition-all fixed w-full ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden flex flex-col justify-end`}
        >
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col items-end justify-center focus:outline-none text-white gap-1.5 p-5"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-transform ${isOpen && "rotate-45 translate-y-1 "}`}
            ></span>

            <span
              className={`block w-6 h-0.5  bg-black transition-transform ${isOpen && "-rotate-45 -translate-y-1 "}`}
            ></span>
          </button>

          <nav className="flex flex-col items-center space-y-4 py-4 ">
            <a
              href="#inicio"
              className="hover:text-[#999999] w-full text-center text-black"
              onClick={() => {
                handleScrollTo(inicioRef);
              }}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="hover:text-[#999999]"
              onClick={() => {
                handleScrollTo(ofrecimientosRef);
              }}
            >
              Servicios
            </a>
            <a
              href="#acerca"
              className="hover:text-[#999999]"
              onClick={() => {
                handleScrollTo(contactoRef);
              }}
            >
              Contacto
            </a>
            <a href="https://www.google.com.ar/maps/@-31.3416731,-64.3016578,4279m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D">
              Mapa
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
