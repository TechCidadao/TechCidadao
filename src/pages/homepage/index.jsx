import { HeaderHome } from "../../components/headerHome";
import { Footer } from "../../components/footerHome";
import { MainHome } from "../../components/mainHomepage";

export const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <MainHome />
      <Footer />
      <button
        className="backToTop"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Voltar ao Topo
      </button>
    </>
  );
};
