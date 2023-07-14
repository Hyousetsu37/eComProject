import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import Home from "./components/routes/home/home.componen";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/routes/signin/signin-popup.component";

const Shop = () => {
  return <h1>Shop</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />;
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
