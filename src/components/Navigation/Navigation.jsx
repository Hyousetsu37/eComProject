import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon.component";
import CartDropDown from "../CartDropDown/CartDropDown.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
  NavigationContainer,
  NavLinkContainer,
  LogoContainer,
  NavLink,
} from "./Navigation.styles.jsx";

import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

export function Navigation() {
  const isCartOpen = useSelector(selectIsCartOpen);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/signin">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
