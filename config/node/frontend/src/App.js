import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";
import Map from "./map/Map";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UnitList from "./militaryUnits/UnitList";
import { units } from "./militaryUnits/mu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Nie działa</h1>,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <h1>Nie działa</h1>,
  },
  {
    path: "/services/map",
    element: <Map units={units} />,
    errorElement: <h1>Nie działa</h1>,
  },
  {
    path: "/services/militaryUnits",
    element: <UnitList units={units} />,
    errorElement: <h1>Nie działa</h1>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
