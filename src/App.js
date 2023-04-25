import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import GetStartedHomeView from "./views/GetStartedHomeView";
import GetStartedWelcome from "./views/GetStartedWelcome";
import SignInView from "./views/SignInView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/getstarted" element={<GetStartedHomeView />} />
        <Route path="/getstartedwelcome" element={<GetStartedWelcome />} />
        <Route path="/signin" element={<SignInView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
