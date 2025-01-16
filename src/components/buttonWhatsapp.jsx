import React from 'react'
import WhatsappIcon from '../assets/WhatsApp.png'

export const ButtonWhatsapp = () => {
  return (
    <div className='z-10'>
        <a href="https://api.whatsapp.com/send/?phone=5493517504281&text=hola%20como%20estas&type=phone_number&app_absent=0" className='fixed w-12 bottom-0 right-0 m-5 transition duration-700 ease-in-out hover:scale-125' >
            <img src={WhatsappIcon} alt="button whatsapp" />
        </a>
    </div>
  )
}
