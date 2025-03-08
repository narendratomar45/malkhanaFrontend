import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./Components/Loading";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const SummonEntry = lazy(() => import("./pages/SummonEntry"));
const MalkhanaMovement = lazy(() => import("./pages/malkhanaMovement"));
const MalkhanaRelease = lazy(() => import("./pages/malkhanaRelease"));
const GenerateBarcode = lazy(() => import("./pages/GenerateBarcode"));
const Reports = lazy(() => import("./pages/Reports"));
const ImportData = lazy(() => import("./pages/ImportData"));
const ManageUsers = lazy(() => import("./pages/ManageUsers"));
const Setting = lazy(() => import("./pages/Setting"));
const Help = lazy(() => import("./pages/Help"));
const MalkhanaNav = lazy(() => import("./pages/malkhanaEntry/MalkhanaNav"));
const MalkhanaEntry = lazy(() => import("./pages/malkhanaEntry/MalkhanaEntry"));
const FslEntry = lazy(() => import("./pages/malkhanaEntry/FslEntry"));
const KurkiEntry = lazy(() => import("./pages/malkhanaEntry/KurkiEntry"));
const OthersEntry = lazy(() => import("./pages/malkhanaEntry/OthersEntry"));
const UnclaimedEntry = lazy(() =>
  import("./pages/malkhanaEntry/UnclaimedEntry")
);
const SiezedVehicleBody = lazy(() =>
  import("./pages/siezedVehicleEntry/SiezedVehicleBody")
);
const SiezureVehicle = lazy(() =>
  import("./pages/siezedVehicleEntry/SiezureVehicle")
);
const MvactSiezure = lazy(() =>
  import("./pages/siezedVehicleEntry/MvactSiezure")
);
const ArtoSiezure = lazy(() =>
  import("./pages/siezedVehicleEntry/ArtoSiezure")
);
const ExciseVehicle = lazy(() =>
  import("./pages/siezedVehicleEntry/ExciseVehicle")
);
const IpcVehicle = lazy(() => import("./pages/siezedVehicleEntry/IpcVehicle"));
const UnclaimedVehicle = lazy(() =>
  import("./pages/siezedVehicleEntry/UnclaimedVehicle")
);
const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Main Layout with Sidebar and Body */}
          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="summonEntry" element={<SummonEntry />} />
            <Route path="malkhanaMovement" element={<MalkhanaMovement />} />
            <Route path="malkhanaRelease" element={<MalkhanaRelease />} />
            <Route path="generateBarcode" element={<GenerateBarcode />} />
            <Route path="reports" element={<Reports />} />
            <Route path="importData" element={<ImportData />} />
            <Route path="manageUsers" element={<ManageUsers />} />
            <Route path="setting" element={<Setting />} />
            <Route path="help" element={<Help />} />

            <Route path="malkhana" element={<MalkhanaNav />}>
              <Route index element={<Navigate to="malkhanaEntry" replace />} />
              <Route path="malkhanaEntry" element={<MalkhanaEntry />} />
              <Route path="fslEntry" element={<FslEntry />} />
              <Route path="kurkiEntry" element={<KurkiEntry />} />
              <Route path="othersEntry" element={<OthersEntry />} />
              <Route path="unclaimedEntry" element={<UnclaimedEntry />} />
            </Route>

            <Route path="seizedVehicle" element={<SiezedVehicleBody />}>
              <Route index element={<Navigate to="seizureVehicle" replace />} />
              <Route path="seizureVehicle" element={<SiezureVehicle />} />
              <Route path="mvActSeizure" element={<MvactSiezure />} />
              <Route path="artoSeizure" element={<ArtoSiezure />} />
              <Route path="exciseVehicle" element={<ExciseVehicle />} />
              <Route path="ipcVehicle" element={<IpcVehicle />} />
              <Route path="unclaimedVehicle" element={<UnclaimedVehicle />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
