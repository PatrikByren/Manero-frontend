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
import PaymentView from "./views/Paymentstuff/PaymentView";
import EmptyCartView from "./views/Orderviews/EmptyCartView";
import ShoppingCartView from "./views/Orderviews/ShoppingCartView";
import AddNewCardView from "./views/Paymentstuff/AddNewCardView";
import SpecificProductView from "./views/SpecificProductView";
import OrderSuccessfulView from "./views/Orderviews/OrderSuccessfulView";
import OrderFailedView from "./views/Orderviews/OrderFailedView";
import SendReviewView from "./views/Review/SendReviewView";
import ReviewsView from "./views/Review/ReviewsView";
import MyPromoCodeView from "./views/PromoCodeViews/MyPromoCodeView";
import OrderHistoryView from "./views/Orderviews/OrderHistoryView";
import NewAddressView from "./views/profileViews/NewAddressView";
import CartView from "./views/Orderviews/CartView";
import WishlistView from "./views/WishlistView";
import CheckoutShipping from "./views/Orderviews/CheckoutShipping";
import CheckoutPayment from "./views/Orderviews/CheckoutPayment";
import Checkout from "./views/Orderviews/Checkout";


function App() {
  const apiRoute = "https://manero.azurewebsites.net";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/getstarted" element={<GetStartedHomeView />} />
        <Route path="/getstartedwelcome" element={<GetStartedWelcome />} />
        <Route path="/signin" element={<SignInView />} />
        <Route path="/signup" element={<SignUpView apiRoute={apiRoute} />} />
        <Route path="/accountcreated" element={<AccountCreatedView />} />
        <Route path="/forgotpassword" element={<ForgotPasswordView />} />
        <Route
          path="/forgotpasswordemail"
          element={<ForgotPasswordSendEmailView />}
        />
        <Route path="/newpassword" element={<NewPasswordView />} />
        <Route path="/myprofile" element={<MyProfileView />} />
        <Route path="/myaddress" element={<MyAddressView />} />
        <Route
          path="/forgotpasswordemail"
          element={<ForgotPasswordSendEmailView />}
        />
        <Route path="/confirmnumber" element={<ConfirmNumberView />} />
        <Route path="/verifynumber" element={<VerifyNumberView />} />
        <Route path="/shop" element={<ShopView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/shop/filter" element={<FilterView />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/emptycart" element={<EmptyCartView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/order" element={<ShoppingCartView />} />
        <Route path="/ordersuccessful" element={<OrderSuccessfulView />} />
        <Route path="/orderfail" element={<OrderFailedView />} />
        <Route path="/orderhistory" element={<OrderHistoryView />} />
        <Route path="/checkout/shipping" element={<CheckoutShipping/>}/>
        <Route path="/checkout/payment" element={<CheckoutPayment/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/paymentmethod" element={<PaymentView />} />
        <Route path="/AddNewCard" element={<AddNewCardView />} />
        <Route path="/SpecificProduct" element={<SpecificProductView />} />
        <Route path="/sendreview" element={<SendReviewView />} />
        <Route path="/reviews" element={<ReviewsView />} />
        <Route path="/promocode" element={<MyPromoCodeView />} />
        <Route path="/myaddress/new" element={<NewAddressView />} />
        <Route path="/Wishlist" element={<WishlistView />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
