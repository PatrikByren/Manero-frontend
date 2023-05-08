import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import GetStartedHomeView from "./views/GetStartedHomeView";
import GetStartedWelcome from "./views/GetStartedWelcome";
import SignInView from "./views/signInSignUpViews/SignInView";
import ForgotPasswordView from "./views/signInSignUpViews/ForgotPasswordView";
import ForgotPasswordSendEmailView from "./views/signInSignUpViews/ForgotPasswordSendEmailView";
import SignUpView from "./views/signInSignUpViews/SignUpView";
import NewPasswordView from "./views/signInSignUpViews/NewPasswordView";
import MyProfileView from "./views/profileViews/MyProfileView";
import AccountCreatedView from "./views/signInSignUpViews/AccountCreatedView";
import ConfirmNumberView from "./views/ConfirmNumberView";
import VerifyNumberView from "./views/VerifyNumberView";
import SearchView from "./views/SearchView";
import ShopView from "./views/ShopView";
import MyAddressView from "./views/profileViews/MyAddressView";
import ProductView from "./views/ProductView";
import FilterView from "./views/FilterView";
import EditProfile from "./views/profileViews/EditProfile";
import Paymentmethod from "./views/Paymentmethod";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/getstarted" element={<GetStartedHomeView />} />
        <Route path="/getstartedwelcome" element={<GetStartedWelcome />} />
        <Route path="/signin" element={<SignInView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/accountcreated" element={<AccountCreatedView />} />
        <Route path="/forgotpassword" element={<ForgotPasswordView />} />
        <Route path="/forgotpasswordemail" element={<ForgotPasswordSendEmailView />} />
        <Route path="/newpassword" element={<NewPasswordView />} />
        <Route path="/myprofile" element={<MyProfileView />} />
        <Route path="/myaddress" element={<MyAddressView />} />
        <Route path="/forgotpasswordemail" element={<ForgotPasswordSendEmailView />} />
        <Route path="/confirmnumber" element={<ConfirmNumberView />} />
        <Route path="/verifynumber" element={<VerifyNumberView />} />
        <Route path="/shop" element={<ShopView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/shop/filter" element={<FilterView />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/paymentmethod" element={<Paymentmethod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
