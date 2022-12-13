import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Update from "./Pages/Update";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
    return (
        <Router>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/register"> Register </Link>
                <Link to="/login"> Login </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/update" element={<Update />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            <div> Footer </div>
        </Router>
    )
}
