import { DesktopTutorial } from "pages/desktopTutorial";
import { HomePage } from "pages/homepage";
import { MobileTutorials } from "pages/mobileTutorial";
import UserPage from "pages/userPage/UserPage";
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
