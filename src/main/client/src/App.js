import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Facilities from "./components/Facilities";
import DashboardAdmin from "./components/DashboardAdmin";
import Register from "./components/Register";
import Spa from "./components/Spa";
import Room from "./components/Room"
import LoginPage from "./components/LoginPage";

function App() {
    return (
        <Router>

            <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/facilities" element={<Facilities/>}/>
                    <Route exact path="/spa" element={<Spa/>}/>
                    <Route exact path="/bookroom" element={<Room/>}/>
                    <Route exact path="loginpage" element={<LoginPage/>}/>
                    <Route exact path="/dashboardadmin" element={<DashboardAdmin/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;