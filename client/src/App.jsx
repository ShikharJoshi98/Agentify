import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./guards/ProtectedRoute";
import PublicRoute from "./guards/PublicRoute";
import { useEffect } from "react";
import { chechAuthRequest } from "./modules/features/auth/authAction";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import AgentBuilder from "./pages/AgentBuilder";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chechAuthRequest());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />

          </Route>
          <Route path="/agent-builder/:agentId" element={<ProtectedRoute><AgentBuilder /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
