import { DesktopTutorial } from "../pages/desktopTutorial";
import { HomePage } from "../pages/homepage";
import { MobileTutorial } from "../pages/mobileTutorial";
import { UserPage } from "../pages/userPage";
//substituir conteúdo interno das tags das rotas
import { Route, Routes } from "react-router-dom";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<UserPage />} />
      <Route path="/dashboard/mobile" element={<MobileTutorial />} />
      <Route path="/dashboard/desktop" element={<DesktopTutorial />} />
    </Routes>
  );
};
