import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CallForPapersPage from "./pages/CallForPapersPage";
import SubmissionPage from "./pages/SubmissionPage";
import RegistrationPage from "./pages/RegistrationPage";
import CommitteePage from "./pages/CommitteePage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/call-for-papers" element={<CallForPapersPage />} />
            <Route path="/submission" element={<SubmissionPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/committee" element={<CommitteePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Page Not Found</h2>
                <p className="text-gray-500 mb-6">The page you are looking for does not exist.</p>
                <a href="/" className="btn-primary">Back to Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
