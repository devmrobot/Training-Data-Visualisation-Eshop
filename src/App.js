import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home.jsx";
import { SideBar } from "./component/sidebar/SideBar";


function App() {

  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
