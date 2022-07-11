import { HeaderHome } from "../../components/headerHome";
import { Footer } from "../../components/footerHome";
import { MainHome } from "../../components/mainHomepage";
import { Modal } from "components/Modal";
import { useState } from "react";

export const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <MainHome />
      <Footer />
    </>
  );
};
