import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../../src/pages/about";
import Project from "../../src/pages/project";
import Home from "../pages";
import { PATH } from "../../src/path/path.js";

export default function Element() {
  const router = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <About />,
          path: PATH.about,
        },
        {
          element: <Project />,
          path: PATH.project,
        },
      ],
    },
  ]);
  return router;
}
