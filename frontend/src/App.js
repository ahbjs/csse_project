import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Drivers from './pages/Drivers/Drivers';
import Inspectror from './pages/Inspector/Inspectror';
import AddDriver from './pages/AddDriver/AddDriver';
import AddInspector from './pages/AddInspector/AddInspector';
import AddRoute from "./pages/AddRoute/AddRoute";
import ViewShedule from './pages/ViewShedule/ViewShedule';
import UpdateShedule from './pages/UpdateShedule/UpdateShedule';
import AddPrice from './pages/AddPrice/AddPrice';
import ViewPrice from './pages/ViewPrice/ViewPrice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ViewShedule />} />
        <Route exact path="/drivers" element={<Drivers />} />
        <Route exact path="/inspectors" element={<Inspectror />} />
        <Route exact path="/addDriver" element={<AddDriver />} />
        <Route exact path="/addInspector" element={<AddInspector />} />
        <Route exact path="/addRoute" element={<AddRoute />} />
        <Route exact path="/updateshedule" element={<UpdateShedule />} />
        <Route exact path="/addPrice" element={<AddPrice />} />
        <Route exact path="/viewPrice" element={<ViewPrice />} />
      </Routes>
    </div>
  );
}

export default App;
