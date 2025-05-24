import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error from "./components/Error";

const NamasteJavascript = lazy(() =>
  import("./components/Courses/NamasteJavascript")
);
const NamasteReact = lazy(() => import("./components/Courses/NamasteReact"));
const NextJs = lazy(() => import("./components/Courses/NextJs"));
const Html = lazy(() => import("./components/Interview/Html"));
const JavaScript = lazy(() => import("./components/Interview/JavaScript"));
const React = lazy(() => import("./components/Interview/React"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <NamasteJavascript />
          </Suspense>
        ),
      },
      {
        path: "/namaste-react",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <NamasteReact />
          </Suspense>
        ),
      },
      {
        path: "/nextjs",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <NextJs />
          </Suspense>
        ),
      },
      {
        path: "/interview/html",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Html />
          </Suspense>
        ),
      },
      {
        path: "/interview/javascript",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <JavaScript />
          </Suspense>
        ),
      },
      {
        path: "/interview/react",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <React />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
