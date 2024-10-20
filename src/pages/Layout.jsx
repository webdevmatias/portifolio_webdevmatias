import React, { useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import SobreMim from "./SobreMim";
import Habilidades from "./Habilidades";
import Projetos from "./Projetos";
import Contateme from "./Contateme";
import Home from "./Home";

function Layout() {

  return (
    <>
      <AppHeader></AppHeader>
      <Home></Home>
      <SobreMim></SobreMim>
      <Habilidades></Habilidades>
      <Projetos></Projetos>
      <Contateme></Contateme>
    </>
  );
}

export default Layout;

