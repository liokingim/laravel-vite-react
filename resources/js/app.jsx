import './bootstrap';

import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";
import Logo from "../images/logo-with-shadow.png";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <img src={Logo} />
            <Counter />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);