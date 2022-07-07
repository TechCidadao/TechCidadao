import { DesktopTutorial } from "../pages/desktopTutorial";
import { HomePage } from "../pages/homepage/index";
import { MobileTutorials } from "../pages/mobileTutorial/index";
import { UserPage } from "../pages/userPage/index";
//substituir conteúdo interno das tags das rotas
import { Route, Routes } from "react-router-dom";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<UserPage />} />
      <Route path="/dashboard/mobile" element={<MobileTutorials />} />
      <Route path="/dashboard/desktop" element={<DesktopTutorial />} />
    </Routes>
  );
};
