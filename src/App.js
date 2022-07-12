import { MainRoutes } from "routes/routes";
import GlobalStyle from "styles/GlobalStyle";
import VLibras from "@djpfs/react-vlibras";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 10000 }}
      />
      <VLibras />
      <GlobalStyle />
      <MainRoutes />
    </>
  );
}

export default App;
