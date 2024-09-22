import { Routes, Route } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import EduSphere from "./Pages/EduSphere";
import EmailVerificationPage from "./Pages/EmailVerificationPage";

function App() {
  return (
    <div className="min-h-screen bg- flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <FloatingShape
        color="bg-blue-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-sky-400"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-sky-800"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <Routes>
        <Route path="/" element={<EduSphere />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
    </div>
  );
}

export default App;
