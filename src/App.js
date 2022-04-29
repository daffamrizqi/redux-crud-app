import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditUser from "./pages/EditUser";
import DetailUser from "./pages/DetailUser";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <div>
      <div className="main-container">
        <BrowserRouter>
          <MyNavbar />
          <Jumbotron />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/user-edit/:id" element={<EditUser />} />
            <Route path="/user-detail/:id" element={<DetailUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
