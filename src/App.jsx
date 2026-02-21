import { Link } from "react-router";
import "./App.css";

function App() {
    return (
        <div>
            <nav>
                <Link to="/app">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/bmi">BMI Calculator</Link>
            </nav>
        </div>
    );
}
export default App;