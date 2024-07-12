import { Route, Routes } from "react-router-dom";
import { routes } from "./config";
import "./styles/style.css";
import { FacebookMsg, Navbar } from "./components";

function App() {
  return (
    <div id="main-container" data-scroll-container>
      {/* Messenger */}
      <FacebookMsg />
      {/* Navbar */}
      <Navbar />

      <div className="pages">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
