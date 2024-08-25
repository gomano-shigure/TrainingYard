import { createBrowserRouter } from "react-router-dom";
import Error404 from "./Template/404";
import { Main } from "./Template/Template";
import React from "react";
import { PageDraggable } from "./pages/draggable";
import { MainRight } from "./pages/default";

interface menuStats {
  title: string;
  link: string;
  element: React.ReactNode;
}
interface route {
  element: React.ReactNode;
  path: string;
  errorElement?: React.ReactNode;
}
export const menuList: menuStats[] = [
  {
    title: "ライブラリ:react-draggable",
    link: "react-draggable",
    element: <PageDraggable />,
  },
];

const routeList: route[] = menuList.map((value) => {
  return { element: value.element, path: value.link };
});
export const searchList = menuList.map((value) => {
  return value.title;
});
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error404 />,
    children: routeList.concat([
      {
        element: <MainRight></MainRight>,
        path: "",
      },
    ]),
  },
]);
