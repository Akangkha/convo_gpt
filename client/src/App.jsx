import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main.jsx";
import "./App.css";
import Topbar from "../components/Topbar.jsx";

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_APP_API_URL);
  return (
    <div className=" h-screen w-screen ">
      <Topbar />
      <div className="flex ">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
