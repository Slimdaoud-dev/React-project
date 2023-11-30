import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Avoirclient from "./pages/Vente/Avoirclient.jsx";
import Fichevente from "./pages/Vente/Ficheclient.jsx";
import Devis from "./pages/Vente/Devis.jsx";
import Bondecommande from "./pages/Vente/Bondecommande.jsx";
import Facture from "./pages/Vente/Facture.jsx";
import Bonderetour from "./pages/Vente/Bonderetour.jsx";
import Bondelivraison from "./pages/Vente/Bondelivraison.jsx";
import Fichedefournisseur from "./pages/Achat/Fichedefournisseur.jsx";
import Facturedefournisseur from "./pages/Achat/Facturedefournisseur.jsx";
import BLfournisseur from "./pages/Achat/BLfournisseur.jsx";
import Fichedearticle from "./pages/Stock/Fichedearticle.jsx";
import Bondentree from "./pages/Stock/Bondentree.jsx";
import Bondesortie from "./pages/Stock/Bondesortie.jsx";
import Reglementclient from "./pages/Finance/Reglementclient.jsx";
import Reglementfournisseur from "./pages/Finance/Reglementfournisseur.jsx";
import Pie from "./pages/Pie/Pie.jsx";
import ChartComponent from "./pages/barf/barf.jsx";
import Line from "./pages/line/line.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

import ApexChart from "./components/barrr.jsx";
import TwoSidedBarChart from "./pages/Compteur/Compteur.jsx";
import MyResponsiveBump from "./pages/Bump/Bump.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Dashboard />}></Route>
        {/*    Vente     */}
        <Route index path="/Avoirclient" element={<Avoirclient />}></Route>
        <Route index path="/Devis" element={<Devis />}></Route>
        <Route index path="/Bondecommande" element={<Bondecommande />}></Route>
        <Route
          index
          path="/Bondelivraison"
          element={<Bondelivraison />}
        ></Route>
        <Route index path="/Facture" element={<Facture />}></Route>
        <Route index path="/Bonderetour" element={<Bonderetour />}></Route>
        <Route index path="/Fichevente" element={<Fichevente />}></Route>
        {/*    Achat     */}
        <Route
          index
          path="/Fichedefournisseur"
          element={<Fichedefournisseur />}
        ></Route>
        <Route
          index
          path="/Facturedefournisseur"
          element={<Facturedefournisseur />}
        ></Route>
        <Route index path="/BLfournisseur" element={<BLfournisseur />}></Route>
        {/*    Stock    */}
        <Route
          index
          path="/Fichedearticle"
          element={<Fichedearticle />}
        ></Route>
        <Route index path="/Bondentree" element={<Bondentree />}></Route>
        <Route index path="/Bondesortie" element={<Bondesortie />}></Route>
        {/*    Finance   */}
        <Route
          index
          path="/Reglementclient"
          element={<Reglementclient />}
        ></Route>
        <Route
          index
          path="/Reglementfournisseur"
          element={<Reglementfournisseur />}
        ></Route>

        <Route index path="/Pie" element={<Pie />}></Route>
        <Route index path="/Bar" element={<ChartComponent />}></Route>
        <Route index path="/Line" element={<Line />}></Route>

        <Route index path="/Comp" element={<TwoSidedBarChart />}></Route>

        <Route index path="/Chart" element={<ApexChart />}></Route>
        <Route index path="/Bump" element={<MyResponsiveBump />}></Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
