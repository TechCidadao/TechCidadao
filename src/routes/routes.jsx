import { DesktopTutorial } from "../pages/desktopTutorial";
import { HomePage } from "../pages/homepage/index";
import { MobileTutorial } from "../pages/mobileTutorial/index";
import { UserPage } from "../pages/userPage/index";
import { PageTutorial } from "pages/TutorialFinal";
import { NotFound } from "pages/notFound";
//substituir conteúdo interno das tags das rotas
import { Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<UserPage />} />
      <Route path="/dashboard/mobile" element={<MobileTutorial />} />
      <Route path="/dashboard/desktop" element={<DesktopTutorial />} />
      <Route path="dashboard/mobile/tutorial/:id" element={<PageTutorial />} />
      <Route path="dashboard/desktop/tutorial/:id" element={<PageTutorial />} />
      <Route path="/notFound" element={<NotFound />} />
    </Routes>
  );
};
