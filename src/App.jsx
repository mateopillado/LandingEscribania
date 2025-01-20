import { DondeEstamos } from "./components/dondeEstamos";
import { QuienesSomos } from "./components/quienesSomos";
import { NavBar } from "./components/navBar";
import { PresentationalBackground } from "./components/presentationalBackground";
import { ButtonWhatsapp } from "./components/buttonWhatsapp";
import { Ofrecimientos } from "./components/ofrecimientos";
import { FormAndMap } from "./components/formAndMap";
import { useRef, useState } from "react";
import { Dudas } from "./components/dudas";
import { Footer } from "./components/footer";
import { use } from "react";
function App() {
  const ofrecimientosRef = useRef();
  const inicioRef = useRef();
  const contactoRef = useRef();

  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  function handleChangeNavbarTransparent(value) {
    setIsNavbarTransparent(value);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center text-black">
      <NavBar
        isNavbarTransparent={isNavbarTransparent}
        ofrecimientosRef={ofrecimientosRef}
        inicioRef={inicioRef}
        contactoRef={contactoRef}
      />
      <ButtonWhatsapp />
      <PresentationalBackground
        inicioRef={inicioRef}
        ofrecimientosRef={ofrecimientosRef}
        contactoRef={contactoRef}
      />
      <Ofrecimientos
        handleChangeNavbarTransparent={handleChangeNavbarTransparent}
        ofrecimientosRef={ofrecimientosRef}
      />

      <QuienesSomos></QuienesSomos>

      <Dudas></Dudas>
      <DondeEstamos />
      <FormAndMap contactoRef={contactoRef}></FormAndMap>
      <Footer></Footer>
    </div>
  );
}

export default App;
