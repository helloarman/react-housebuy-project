import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { PropertyList } from "./Pages/PropertyList";
import ContactUs from "./Pages/ContactUs";
import LoginMiddleware from "./Middleware/LoginMiddleware";
import Login from "./Pages/Login";
import PostProperty from "./Pages/PostProperty";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/post-property"
          element={<LoginMiddleware Component={PostProperty} />}
        />
      </Routes>
    </>
  );
}

export default App;
