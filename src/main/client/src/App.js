import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Facilities from "./components/Facilities";
import DashboardAdmin from "./components/DashboardAdmin";
import Register from "./components/Register";
import Spa from "./components/Spa";
import Services from "./components/Services"
import LoginPage from "./components/LoginPage";
import Users from "./components/Users";

function App() {
    return (
        <Router>

            <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/facilities" element={<Facilities/>}/>
                    <Route exact path="/spa" element={<Spa/>}/>
                    <Route exact path="/services" element={<Services/>}/>
                    <Route exact path="loginpage" element={<LoginPage/>}/>
                    <Route exact path="/dashboardadmin" element={<DashboardAdmin/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/users" element={<Users />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;