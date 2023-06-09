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
import ProtectedRoute from "./functions/Profile/ProtectedRoute";
import ProtectedIsSignedInRoute from "./functions/Profile/ProtectedIsSignedInRoute";
import FirstVisitRoute from "./functions/Profile/FirstVisitRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/getstarted" element={<GetStartedHomeView />} />
        <Route path="/getstartedwelcome" element={<GetStartedWelcome />} />

        <Route element={<FirstVisitRoute />}>
          <Route element={<ProtectedIsSignedInRoute />}>
            <Route path="/signin" element={<SignInView />} />
          </Route>
          <Route element={<ProtectedIsSignedInRoute />}>
            <Route path="/signup" element={<SignUpView />} />
          </Route>
          <Route element={<ProtectedIsSignedInRoute />}>
            <Route
              path="/forgotpasswordemail"
              element={<ForgotPasswordSendEmailView />}
            />
          </Route>
          <Route element={<ProtectedIsSignedInRoute />}>
            <Route path="/forgotpassword" element={<ForgotPasswordView />} />
          </Route>
          <Route element={<ProtectedIsSignedInRoute />}>
            <Route path="/newpassword" element={<NewPasswordView />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomeView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
           <Route path="/search" element={<SearchView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/accountcreated" element={<AccountCreatedView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/myprofile" element={<MyProfileView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/myaddress" element={<MyAddressView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/myaddress/new" element={<NewAddressView />} />
          </Route>

          <Route path="/confirmnumber" element={<ConfirmNumberView />} />
          <Route path="/verifynumber" element={<VerifyNumberView />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/shop" element={<ShopView />}  />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/product" element={<ProductView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/shop/filter" element={<FilterView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/editprofile" element={<EditProfile />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/emptycart" element={<EmptyCartView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/order" element={<ShoppingCartView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/ordersuccessful" element={<OrderSuccessfulView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/orderfail" element={<OrderFailedView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/orderhistory" element={<OrderHistoryView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout/shipping" element={<CheckoutShipping />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout/payment" element={<CheckoutPayment />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/paymentmethod" element={<PaymentView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/AddNewCard" element={<AddNewCardView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/SpecificProduct" element={<SpecificProductView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/sendreview" element={<SendReviewView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/reviews" element={<ReviewsView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/promocode" element={<MyPromoCodeView />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/Wishlist" element={<WishlistView />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
