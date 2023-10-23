import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Suspense, lazy } from "react"

import "./assets/autoservis.png"
import "./assets/lakovna.png"
import "./assets/pojistneudalosti.png"
import "./assets/pneuservis.png"

const Home = lazy(() => import("./pages/Home/Home.jsx"))
const Autoservis = lazy(() => import("./pages/Autoservis/Autoservis.jsx"))
const Pneuservis = lazy(() => import("./pages/Pneuservis/Pneuservis.jsx"))
//const Autopujcovna = lazy(() => import("./pages/Autopujcovna/Autopujcovna.jsx"))
const PojistneUdalosti = lazy(() =>
  import("./pages/PojistneUdalosti/PojistneUdalosti.jsx")
)
const Kontakt = lazy(() => import("./pages/Kontakt/Kontakt.jsx"))
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage.jsx"))

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/autoservis",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Autoservis />
            </Suspense>
          ),
        },
        {
          path: "/pneuservis",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Pneuservis />
            </Suspense>
          ),
        },
        /*
      {
        path: "/autopujcovna",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Autopujcovna />
          </Suspense>
        ),
      },
      */
        {
          path: "/pojistneudalosti",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PojistneUdalosti />
            </Suspense>
          ),
        },
        {
          path: "/kontakt",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Kontakt />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: "/ahWeb" }
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
