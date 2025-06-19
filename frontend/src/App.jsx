import React from "react";
import AppRoutes from "./routes/AppRoutes.jsx";
import NavBar from "./components/NavBar.jsx";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginDetail } from "./redux/thunks/userThunk.js";
function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          error: {
            style: {
              background: "red",
              color: "#fff",
              marginBottom: "10px",
            },
          },
          success: {
            style: {
              background: "#4ade80",
              color: "065f46",
              marginBottom: "10px",
            },
          },
          duration: 5000,
          removeDelay: 1000,
        }}
      />
      <NavBar />
      <main className="container @container mx-auto">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
