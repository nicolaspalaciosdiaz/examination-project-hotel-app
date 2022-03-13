import './App.css';
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import User from "./components/User";
import {Fragment} from "react";


function App() {
    return (
        <Router>
            <div className="App">
                <Users/>

                <Routes>
                    <Route exact path="/" element={<UserForm/>}/>

                </Routes>
            </div>
        </Router>
    );
}

export default App;

/*<Routes>
                   <Route exact path="/" component={<User/>}/>
                <Route exact path="/userform" component={<UserForm/>}/>
</Routes>*/
