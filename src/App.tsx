// src/App.jsx

import ParticleScene from "../src/assets/components/Particles/Particles";

// IMPORTS COMPONENTS
import Nav from "./Pages/Nav/Nav_bar";
import Page_1 from "./Pages/Page_1";
import Page_2 from "./Pages/Page_2";
import  Page_3  from "./Pages/Page_3";


export default function App() {
  return (
    <section>
      <ParticleScene />
      <Nav />
      <Page_1 />
      <Page_2 />
      <Page_3/>
     
    </section>
  );
}
