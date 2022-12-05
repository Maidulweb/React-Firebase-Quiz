import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/quiz"
          element={
            <Layout>
              <Quiz />
            </Layout>
          }
        />
        <Route
          path="/result"
          element={
            <Layout>
              <Result />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
