import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import GrandPa from "./components/GrandPa/GrandPa";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orderreview" element={<OrderReview />} />
        <Route path="/grandpa" element={<GrandPa />} />
      </Routes>
    </div>
  );
}

export default App;
