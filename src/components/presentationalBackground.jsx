import React from "react";
import backgroundImg from "../assets/background3black.png";
import "../animacion.css";
import { ArrowDownToLine } from "lucide-react";

export const PresentationalBackground = ({
  inicioRef,
  ofrecimientosRef,
  contactoRef
}) => {
  function handleScrollTo(ref) {
    const element = ref.current;
    if (element) {
      window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
    }
  }

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="w-full h-[25rem] bg-center bg-cover sm:h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[100vh] flex items-center flex-col justify-center font-sans font-bold text-2xl gap-5"
      ref={inicioRef}
    >
      <div className="flex flex-col justify-center items-center">
        <p className="font-Poppins text-xs font-light text-white">
          Escribania Publica
        </p>
        <h1 className="font-Poppins text-4xl xl:text-6xl text-white">
          Benitez de Filiaci
        </h1>
        <hr className="text-white border-[1px] w-[60%] m-2" />
        <p className="font-Poppins font-light text-xs text-white">
          Cordoba Capital Registro N°670
        </p>
      </div>
      <button
        className="font-normal border-[2px] border-white text-white p-3 rounded-1xl transition duration-700 ease-in-out hover:scale-110 font-Poppins hover:font-Poppins text-xs tracking-widest"
        onClick={() => {
          handleScrollTo(contactoRef);
        }}
      >
        Contactanos
      </button>

      <a
        href="#servicios"
        onClick={() => {
          handleScrollTo(ofrecimientosRef);
        }}
        className="bounce hidden xl:block absolute bottom-3"
      >
        <ArrowDownToLine size={48} color="#ffffff" strokeWidth={1} />
      </a>
    </div>
  );
};
