import React from 'react';

import { SectionWrapper } from '../hoc';
import Tech from './Tech';
import SectionHeading from './SectionHeading';


const About = () => {
  return (
    <>
      <SectionHeading
          headText="Bienvenidos"
          title="Mis Habilidades"
          text="Soy un desarrollador de software altamente capacitado, con experiencia sólida en Typescript y Javascript. Además, cuento con un conocimiento especializado en el manejo de frameworks como Next.js, React.js y Three.js. Mi capacidad de aprendizaje es excepcional, y disfruto colaborando para lograr eficiencia en el trabajo en equipo. Siempre me motiva encontrar soluciones efectivas y prácticas para los desafíos que puedan surgir en nuestro camino. Estoy emocionado de trabajar juntos para dar vida a nuestras ideas!
          "
      />

      <Tech />

    </>
  )
}

export default SectionWrapper(About, "about")