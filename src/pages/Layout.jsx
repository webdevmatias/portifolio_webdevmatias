import React, { useState } from "react";
import AppHeader from "../components/layout/AppHeader";
import SobreMim from "./SobreMim";
import Habilidades from "./Habilidades";
import Projetos from "./Projetos";
import ContateMe from "./ContateMe";
import Home from "./Home";

function Layout() {

  return (
    <>
      <AppHeader isVisible={true}></AppHeader>
      <Home></Home>
      <SobreMim></SobreMim>
      <Habilidades></Habilidades>
      <Projetos></Projetos>
      <ContateMe></ContateMe>
    </>
  );
}

export default Layout;

