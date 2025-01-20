import React from "react";
import leftImg from "../assets/comoLlegar.jpg";

export const QuienesSomos = () => {
  return (
    <div className="bg-gray-100  text-black w-full flex  items-center justify-center">
      <div className="flex flex-col items-center text-center p-10  xl:p-16 xl:w-[40%] gap-3">
        <h2 className="font-Poppins  font-medium text-3xl">
          Somos expertos en este campo desde hace casi 20 años.
        </h2>
        <p className="font-Poppins text-[#999999]">
          Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem
          quis bibendum auctor, nisi elit cuat ipsum, nec sagittis sem nibh id
          elit duis sed odio sit nibh vulputate cursus a sit amet mauris morbi
          accumsan.
        </p>
      </div>
      <div className=" w-[35%] p-10 hidden xl:block">
        <img src={leftImg} alt="" className="rounded-xl" />
      </div>
    </div>
  );
};
