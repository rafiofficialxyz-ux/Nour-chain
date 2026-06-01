import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoadingScreen from "./components/LoadingScreen";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Community from "./pages/Community";
import Referral from "./pages/Referral";
import Account from "./pages/Account";
import Game from "./pages/Game";
import Admin from "./pages/Admin";

function Gate() {
  const { loading, tg } = useAuth();
  const [minDone, setMinDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMinDone(true), 1800); return () => clearTimeout(t); }, []);

  if (loading || !minDone) return <LoadingScreen />;
  if (!tg) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div className="glass-strong rounded-3xl p-8 max-w-sm">
          <h1 className="font-display text-2xl mb-2 text-gradient">Open in Telegram</h1>
          <p className="text-silver/70 text-sm">Please open this link inside Telegram to use Nour Chain.</p>
        </div>
      </div>
    );
  }
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/community" element={<Community />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/account" element={<Account />} />
        <Route path="/game" element={<Game />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Gate />
    </AuthProvider>
  );
}
