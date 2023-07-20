/* eslint-disable react/prop-types */
import { createContext } from "react";

const CheckOutContext = createContext({});

export default function CheckoutProvider({ children }) {
  const value = {};
  return (
    <CheckOutContext.Provider value={value}>
      {children}
    </CheckOutContext.Provider>
  );
}
