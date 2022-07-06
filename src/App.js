import { Route, Routes } from "react-router-dom";
import "./app.css";
import { Home } from "./pages/Home.jsx";
import { SideBar } from "./component/sidebar/SideBar";


function App() {

  return (
    <div className="App">
      <SideBar />
      {/* <div className="">
        {activeMenu ? (
          <div className="nav-open">
            <SideBar />
          </div>
        ) : (
          <div className="nav-closed">
            <SideBar />
          </div>
        )}
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
