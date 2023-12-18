import AboutSection from "../Components/AboutSection";
import { Contact } from "../Components/Contact";
import Header from "../Components/Header";
import Master from "../Layouts/Master";

function About() {
  let title = "About";
  let breadcrumb = [
    {
      url: "",
      label: "Home",
    },
    {
      url: "",
      label: "Page",
    },
    {
      url: "",
      label: "About",
    },
  ];
  return (
    <div>
      <Master>
        <Header title={title} breadcrumb={breadcrumb} />
        <AboutSection />
        <Contact />
      </Master>
    </div>
  );
}

export default About;
