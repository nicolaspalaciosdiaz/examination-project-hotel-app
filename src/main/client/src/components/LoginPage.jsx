import React, {useState} from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

function LoginPage(props) {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    return (
        <React.Fragment>
            <MenuBar/>
            <div>
                <div>
                    <h1>LOGGA IN</h1>
                </div>
                <div>
                    <form>
                        <div>
                            <label htmlFor="exampleInputEmail">EMAIL</label>
                            <input type="email" id="email"
                                   placeholder="Skriv din email"/>
                        </div>
                        <div>
                            <label htmlFor="InputPassword">PASSWORD</label>
                            <input type="password"
                                   id="password"
                                   placeholder="Lösenord"/>
                        </div>
                        <button type="submit" className="btn btn-login">
                            LOGGA IN
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default LoginPage;