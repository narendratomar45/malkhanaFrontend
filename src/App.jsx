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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/body" element={<Body />}>
            <Route path="navbar" element={<Navbar />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="malkhanaEntry" element={<MalkhanaEntry />} />
            <Route path="fslEntry" element={<FslEntry />} />
            <Route path="kurkiEntry" element={<KurkiEntry />} />
            <Route path="othersEntry" element={<OthersEntry />} />
            <Route path="unclaimedEntry" element={<UnclaimedEntry />} />
            <Route path="unclaimedEntry" element={<UnclaimedEntry />} />
          </Route>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
