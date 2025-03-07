import Navbar from "./Components/Navbar";
import Body from "./pages/Body";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import MalkhanaEntry from "./pages/malkhanaEntry/MalkhanaEntry";
import FslEntry from "./pages/malkhanaEntry/FslEntry";
import KurkiEntry from "./pages/malkhanaEntry/KurkiEntry";
import OthersEntry from "./pages/malkhanaEntry/OthersEntry";
import UnclaimedEntry from "./pages/malkhanaEntry/UnclaimedEntry";
import Dashboard from "./pages/Dashboard";
import SiezureVehicle from "./pages/siezedVehicleEntry/SiezureVehicle";
import SummonEntry from "./pages/SummonEntry";
import MalkhanaMovement from "./pages/malkhanaMovement";
import MalkhanaRelease from "./pages/malkhanaRelease";
import GenerateBarcode from "./pages/GenerateBarcode";
import Reports from "./pages/Reports";
import ImportData from "./pages/ImportData";
import ManageUsers from "./pages/ManageUsers";
import Setting from "./pages/Setting";
import Help from "./pages/Help";
import MalkhanaNav from "./pages/malkhanaEntry/MalkhanaNav";
import ArtoSiezure from "./pages/siezedVehicleEntry/ArtoSiezure";
import MvactSiezure from "./pages/siezedVehicleEntry/MvactSiezure";
import ExciseVehicle from "./pages/siezedVehicleEntry/ExciseVehicle";
import IpcVehicle from "./pages/siezedVehicleEntry/IpcVehicle";
import UnclaimedVehicle from "./pages/siezedVehicleEntry/UnclaimedVehicle";
import SiezedVehicleBody from "./pages/siezedVehicleEntry/SiezedVehicleBody";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Body />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="malkhana" element={<MalkhanaNav />}>
              <Route path="malkhanaEntry" element={<MalkhanaEntry />} />
              <Route path="fslEntry" element={<FslEntry />} />
              <Route path="kurkiEntry" element={<KurkiEntry />} />
              <Route path="othersEntry" element={<OthersEntry />} />
              <Route path="unclaimedEntry" element={<UnclaimedEntry />} />
            </Route>
            <Route path="seizedVehicle" element={<SiezedVehicleBody />}>
              <Route path="seizureVehicle" element={<SiezureVehicle />} />
              <Route path="mvActSeizure" element={<MvactSiezure />} />
              <Route path="artoSeizure" element={<ArtoSiezure />} />
              <Route path="exciseVehicle" element={<ExciseVehicle />} />
              <Route path="ipcVehicle" element={<IpcVehicle />} />
              <Route path="unclaimedVehicle" element={<UnclaimedVehicle />} />
            </Route>
            <Route path="summonEntry" element={<SummonEntry />} />
            <Route path="malkhanaMovement" element={<MalkhanaMovement />} />
            <Route path="malkhanaRelease" element={<MalkhanaRelease />} />
            <Route path="generateBarcode" element={<GenerateBarcode />} />
            <Route path="reports" element={<Reports />} />
            <Route path="importData" element={<ImportData />} />
            <Route path="manageUsers" element={<ManageUsers />} />
            <Route path="setting" element={<Setting />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
