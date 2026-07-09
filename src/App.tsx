import type { FC } from "react";
import { BrowserRouter, Routes } from "react-router";
import { Head } from "./components/Head";

export const App: FC = () => {
  return (
    <>
      <Head />
      <BrowserRouter>
        <Routes>
          {/* TODO: Pages */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
