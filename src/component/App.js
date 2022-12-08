import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import SignUp from "../pages/SignUp";
import "../styles/App.css";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthProvider>
              <Layout>
                <Home />
              </Layout>
            </AuthProvider>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthProvider>
              <Layout>
                <SignUp />
              </Layout>
            </AuthProvider>
          }
        />
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Layout>
                <Login />
              </Layout>
            </AuthProvider>
          }
        />
        <Route
          path="/quiz"
          element={
            <AuthProvider>
              <Layout>
                <Quiz />
              </Layout>
            </AuthProvider>
          }
        />
        <Route
          path="/result"
          element={
            <AuthProvider>
              <Layout>
                <Result />
              </Layout>
            </AuthProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
