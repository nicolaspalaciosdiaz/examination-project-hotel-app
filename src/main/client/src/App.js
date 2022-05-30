import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Gym from "./components/Gym";
import DashboardAdmin from "./components/DashboardAdmin";
import Register from "./components/Register";
import Spa from "./components/Spa";
import Services from "./components/Services"
import LoginPage from "./components/LoginPage";
import Users from "./components/Users";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
    return (
        <Router>

            <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/gym" element={<Gym/>}/>
                    <Route exact path="/spa" element={<Spa/>}/>
                    <Route exact path="/services" element={<Services/>}/>
                    <Route exact path="loginpage" element={<LoginPage/>}/>
                    <Route exact path="/dashboardadmin" element={<DashboardAdmin/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/users" element={<Users />}/>
                    <Route exact path="/aboutus" element={<AboutUs />}/>
                    <Route exact path="/contactus" element={<ContactUs />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;