import React, { useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import SobreMim from "./SobreMim";
import Habilidades from "./Habilidades";
import Projetos from "./Projetos";
import Contateme from "./Contateme";

function Layout() {

  return (
    <>
      <AppHeader></AppHeader>
      <SobreMim></SobreMim>
      <Habilidades></Habilidades>
      <Projetos></Projetos>
      <Contateme></Contateme>
    </>
  );
}

export default Layout;

