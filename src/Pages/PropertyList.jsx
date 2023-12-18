import { Contact } from "../Components/Contact";
import Header from "../Components/Header";
import { PropertyListing } from "../Components/PropertyListing";
import Master from "../Layouts/Master";

export const PropertyList = () => {
  let title = "Property List";
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
      label: "Property List",
    },
  ];
  return (
    <div>
      <Master>
        <Header title={title} breadcrumb={breadcrumb} />
        <PropertyListing />
        <Contact />
      </Master>
    </div>
  );
};
