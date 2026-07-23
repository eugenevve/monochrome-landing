import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Head } from "./components/Head";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

export const App: FC = () => {
  return (
    <>
      <Head />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
