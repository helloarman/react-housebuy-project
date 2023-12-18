import AboutSection from "../Components/AboutSection";
import Category from "../Components/Category";
import { Contact } from "../Components/Contact";
import Header from "../Components/Header";
import { PropertyListing } from "../Components/PropertyListing";
import Master from "../Layouts/Master";

function Home() {
  let title = "Find A Perfect Home To Live With Your Family";
  let breadcrumb = [];

  return (
    <div>
      <Master>
        <Header title={title} breadcrumb={breadcrumb} />
        <Category />
        <AboutSection />
        <PropertyListing />
        <Contact />
      </Master>
    </div>
  );
}

export default Home;
