import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import Facilities from "./components/Facilities";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import Spa from "./components/Spa";
import Room from "./components/Room"

function App() {
    return (
        <Router>

            <div className="App">
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/facilities" element={<Facilities/>}/>
                    <Route exact path="/spa" element={<Spa/>}></Route>
                    <Route exact path="/bookroom" element={<Room/>}></Route>
                    <Route exact path="/users" element={<Users/>}/>
                    <Route exact path="/userform" element={<UserForm/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;