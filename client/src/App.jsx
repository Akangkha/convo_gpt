import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/prompt/Main.jsx";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Topbar from "../components/Topbar.jsx";

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_APP_API_URL);
  return (
    <div className=" h-full w-full flex flex-col  ">
      <Topbar />
      <div className="flex ">
        <Sidebar />
        <Main />
      </div>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #4E54F0",
            color: "#ffffff",
            background: "#000000",
            fontSize: "0.8rem",
          },
        }}
      />
    </div>
  );
}

export default App;
