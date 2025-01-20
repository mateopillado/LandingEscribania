import React, { useEffect, useRef } from "react";
import { Plane } from "lucide-react";
import { Feather } from "lucide-react";

export const Ofrecimientos = ({
  handleChangeNavbarTransparent,
  ofrecimientosRef
}) => {
  useEffect(() => {
    const HandleScroll = () => {
      if (ofrecimientosRef) {
        const rect = ofrecimientosRef.current.getBoundingClientRect();
        const isVisible =
          window.innerHeight - rect.top >= 20 ||
          window.innerHeight - rect.top >= 300;
        handleChangeNavbarTransparent(!isVisible);
      }
    };

    window.addEventListener("scroll", HandleScroll);

    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, [handleChangeNavbarTransparent]);

  return (
    <div
      className="flex flex-col items-center text-center  p-10 xl:p-16 gap-y-10"
      ref={ofrecimientosRef}
    >
      <div className="flex flex-col items-center mb-4 gap-4">
        <h2 className="text-3xl font-Poppins font-medium">Servicios</h2>
        <p className=" text-gray-500 font-Lora md:w-[60%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque,
          dolorum. amet consectetur adipisicing elit. Doloremque, dolorum.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 xl:grid-cols-4 gap-4 justify-items-center lg:w-[70%] mb-3">
        <div className="w-[65%] flex flex-col gap-2">
          <div className="flex flex-col items-center gap-3">
            <Feather size={68} color="#27352d" strokeWidth={1} />
            <h5 className="font-Poppins font-normal text-2xl">Servicio</h5>
          </div>
          <p className="font-Lora text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odio
            quam distinctio?
          </p>
        </div>

        <div className="w-[65%] flex flex-col gap-2">
          <div className="flex flex-col items-center gap-3">
            <Feather size={68} color="#27352d" strokeWidth={1} />
            <h5 className="font-Poppins font-normal text-2xl">Servicio</h5>
          </div>
          <p className="font-Lora text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odio
            quam distinctio?
          </p>
        </div>

        <div className="w-[65%] flex flex-col gap-2">
          <div className="flex flex-col items-center gap-3">
            <Feather size={68} color="#27352d" strokeWidth={1} />
            <h5 className="font-Poppins font-normal text-2xl">Servicio</h5>
          </div>
          <p className="font-Lora text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odio
            quam distinctio?
          </p>
        </div>

        <div className="w-[65%] flex flex-col gap-2">
          <div className="flex flex-col items-center gap-3">
            <Feather size={68} color="#27352d" strokeWidth={1} />
            <h5 className="font-Poppins font-normal text-2xl">Servicio</h5>
          </div>
          <p className="font-Lora text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odio
            quam distinctio?
          </p>
        </div>
      </div>
    </div>
  );
};
