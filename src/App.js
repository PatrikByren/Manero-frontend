import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import GetStartedHomeView from "./views/GetStartedHomeView";
import GetStartedWelcome from "./views/GetStartedWelcome";
import SignInView from "./views/signInSignUpViews/SignInView";
import ForgotPasswordView from "./views/signInSignUpViews/ForgotPasswordView";
import ForgotPasswordSendEmailView from "./views/signInSignUpViews/ForgotPasswordSendEmailView";
import SignUpView from "./views/signInSignUpViews/SignUpView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/getstarted" element={<GetStartedHomeView />} />
        <Route path="/getstartedwelcome" element={<GetStartedWelcome />} />
        <Route path="/signin" element={<SignInView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/forgotpassword" element={<ForgotPasswordView />} />
        <Route
          path="/forgotpasswordemail"
          element={<ForgotPasswordSendEmailView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
