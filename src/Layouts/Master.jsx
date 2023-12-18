import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

const Master = ({ children }) => {
  return (
    <div className="container-xxl bg-white p-0">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Master;
