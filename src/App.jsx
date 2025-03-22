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
// const ManageUsers = lazy(() => import("./pages/ManageUsers"));
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
  import("./pages/seizedVehicleEntry/SeizedVehicleBody.jsx")
);
const SeizureVehicle = lazy(() =>
  import("./pages/seizedVehicleEntry/SeizureVehicle.jsx")
);
const Mvactseizure = lazy(() =>
  import("./pages/seizedVehicleEntry/MvactSeizure.jsx")
);
const ArtoSeizure = lazy(() =>
  import("./pages/seizedVehicleEntry/ArtoSeizure.jsx")
);
const ExciseVehicle = lazy(() =>
  import("./pages/seizedVehicleEntry/ExciseVehicle.jsx")
);
const IpcVehicle = lazy(() =>
  import("./pages/seizedVehicleEntry/IpcVehicle.jsx")
);
const UnclaimedVehicle = lazy(() =>
  import("./pages/seizedVehicleEntry/UnclaimedVehicle.jsx")
);
const Home = lazy(() => import("./pages/Home.jsx"));

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Main Layout with Sidebar and Body */}
            <Route path="/" element={<Home />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="summonEntry" element={<SummonEntry />} />
              <Route path="malkhanaMovement" element={<MalkhanaMovement />} />
              <Route path="malkhanaRelease" element={<MalkhanaRelease />} />
              <Route path="generateBarcode" element={<GenerateBarcode />} />
              <Route path="reports" element={<Reports />} />
              <Route path="importData" element={<ImportData />} />
              {/* <Route path="manageUsers" element={<ManageUsers />} /> */}
              <Route path="setting" element={<Setting />} />
              <Route path="help" element={<Help />} />
              <Route path="signup" element={<Register />} />
              <Route path="malkhana" element={<MalkhanaNav />}>
                <Route
                  index
                  element={<Navigate to="malkhanaEntry" replace />}
                />
                <Route path="malkhanaEntry" element={<MalkhanaEntry />} />
                <Route path="fslEntry" element={<FslEntry />} />
                <Route path="kurkiEntry" element={<KurkiEntry />} />
                <Route path="othersEntry" element={<OthersEntry />} />
                <Route path="unclaimedEntry" element={<UnclaimedEntry />} />
              </Route>

              <Route path="seizedVehicle" element={<SiezedVehicleBody />}>
                <Route index element={<Navigate to="mvActSeizure" replace />} />
                <Route path="seizureVehicle" element={<SeizureVehicle />} />
                <Route path="mvActSeizure" element={<Mvactseizure />} />
                <Route path="artoSeizure" element={<ArtoSeizure />} />
                <Route path="exciseVehicle" element={<ExciseVehicle />} />
                <Route path="ipcVehicle" element={<IpcVehicle />} />
                <Route path="unclaimedVehicle" element={<UnclaimedVehicle />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
