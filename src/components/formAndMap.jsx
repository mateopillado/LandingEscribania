import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";

export const FormAndMap = ({ contactoRef }) => {
  const [check, setcheck] = useState(false);

  const sendEmail = async (name, phone, mail, message) => {
    await emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          phone_number: phone,
          mail: mail,
          message: message
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setcheck(true);
          setTimeout(() => {
            setcheck(false);
          }, 4000);
        },
        error => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      mail: "",
      message: ""
    },
    onSubmit: values => {
      sendEmail(values.name, values.phone, values.mail, values.message);
    }
  });

  return (
    <div
      className="flex justify-center items-center w-full bg-gray-100 flex-col gap-16 "
      ref={contactoRef}
    >
      <div className="p-10 ">
        <h2 className="text-center text-2xl font-semibold font-Poppins text-black mb-10">
          Envíanos tu consulta
        </h2>
        <form
          className="space-y-4 flex flex-col items-center w-full gap-4"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Nombre
            </label>
            <input
              min={3}
              max={25}
              type="text"
              id="name"
              onChange={formik.handleChange("name")}
              value={formik.values.name}
              name="name"
              placeholder="Nombre"
              className="font-Poppins w-full px-4 py-2 border-b-2 border-black bg-gray-100 text-black focus:outline-none focus:ring-1 focus:ring-black hover:border-b-2 hover:border-orange-500 hover:ease-in-out focus:border-none"
            />
          </div>
          <div>
            <label htmlFor="name" className="sr-only">
              Telefono
            </label>
            <input
              min={3}
              max={15}
              type="text"
              onChange={formik.handleChange("phone")}
              value={formik.values.phone}
              id="phone"
              name="phone"
              placeholder="Telefono"
              className="font-Poppins w-full px-4 py-2 border-b-2 border-black bg-gray-100 text-black focus:outline-none focus:ring-1 focus:ring-black hover:border-b-2 hover:border-orange-500 hover:ease-in-out focus:border-none"
            />
          </div>
          <div>
            <label htmlFor="name" className="sr-only">
              Email
            </label>
            <input
              min={3}
              onChange={formik.handleChange("mail")}
              value={formik.values.mail}
              max={25}
              type="email"
              id="mail"
              name="mail"
              placeholder="Email"
              className="font-Poppins w-full px-4 py-2 border-b-2 border-black bg-gray-100 text-black focus:outline-none focus:ring-1 focus:ring-black hover:border-b-2 hover:border-orange-500 hover:ease-in-out focus:border-none"
            />
          </div>
          <div>
            <label htmlFor="name" className="sr-only">
              Mensaje
            </label>
            <input
              min={3}
              onChange={formik.handleChange("message")}
              value={formik.values.message}
              max={25}
              type="text"
              id="message"
              name="message"
              placeholder="Mensaje"
              className="font-Poppins w-full px-4 py-2 border-b-2 border-black bg-gray-100 text-black focus:outline-none focus:ring-1 focus:ring-black hover:border-b-2 hover:border-orange-500 hover:ease-in-out focus:border-none"
            />
          </div>
          <button
            type="submit"
            className={`${check && "text-green-500"} w-full text-black font-Poppins  w-54 border-2 p-2 text-center rounded-1xl transition duration-700 ease-in-out hover:scale-110  text-xs tracking-widest`}
          >
            {check ? "ENVIADO!" : "ENVIAR CONSULTA"}
          </button>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16758.342724556158!2d-64.19091822872916!3d-31.417714976337894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a29d1d3f9d45%3A0xcbcd910412819792!2sCentro%2C%20X5000%20C%C3%B3rdoba!5e1!3m2!1ses-419!2sar!4v1736885431873!5m2!1ses-419!2sar"
        title="Google Maps"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="grayscale w-full h-80"
      ></iframe>
    </div>
  );
};
