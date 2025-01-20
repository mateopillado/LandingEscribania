import React from "react";
import leftImg from "../assets/quienesSomos.jpg";

export const DondeEstamos = () => {
  return (
    <div className="w-full flex  items-center justify-center">
      <div className=" w-[35%] p-10 hidden xl:flex xl:items-center xl:justify-center">
        <img src={leftImg} alt="" className="rounded-xl contain" />
      </div>
      <div className="bg-white flex flex-col text-black  gap-7 p-10 items-center xl:p-16 xl:w-[40%]">
        <div className="flex items-center flex-col">
          <p className="text-center font-Poppins text-xl">
            Escribania en Cordoba
          </p>
          <hr className=" border-black border-[0.5px] w-[60%] m-2" />
        </div>
        <div className="text-center flex flex-col gap-4">
          <p className="font-Poppins text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. ubicacion
            escrita
          </p>
          <p className="font-Poppins text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. horarios y
            dias de atencion
          </p>
        </div>
        <button className="text-black font-Poppins border-2 p-2  text-center w-32 rounded-1xl transition duration-700 ease-in-out hover:scale-110  hover:font-Poppins text-xs tracking-widest">
          <a href="">Como Llegar</a>
        </button>
      </div>
    </div>
  );
};
