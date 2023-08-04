import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home/Home.jsx"
import Autoservis from "./pages/Autoservis/Autoservis.jsx"
import Pneuservis from "./pages/Pneuservis/Pneuservis.jsx"
import Autopujcovna from "./pages/Autopujcovna/Autopujcovna.jsx"
import PojistneUdalosti from "./pages/PojistneUdalosti/PojistneUdalosti.jsx"
import Kontakt from "./pages/Kontakt/Kontakt.jsx"
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/autoservis", element: <Autoservis /> },
      { path: "/pneuservis", element: <Pneuservis /> },
      { path: "/autopujcovna", element: <Autopujcovna /> },
      { path: "/pojistneudalosti", element: <PojistneUdalosti /> },
      { path: "/kontakt", element: <Kontakt /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
