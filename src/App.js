import { MainRoutes } from "routes/routes";
import GlobalStyle from "styles/GlobalStyle";
import VLibras from "@djpfs/react-vlibras";
  
function App() {
  return (  
    <>
      <VLibras/>
      <GlobalStyle />
      <MainRoutes />
    </>
  );
}

export default App;
