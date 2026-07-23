import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Head } from "./components/Head";
import { useOnlineStatus } from "./hooks/useOnline";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OfflinePage } from "./pages/OfflinePage";
import { ProjectsPage } from "./pages/ProjectsPage";

export const App: FC = () => {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <>
      <Head />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
