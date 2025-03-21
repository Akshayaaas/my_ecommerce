import { Fragment } from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Section from "../Components/Section";
import { products, discoutProducts } from "../../Utils/products.jsx";
import SliderHome from "../Components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "body care" || item.category === "hair care"
  );
  const bestSales = products.filter((item) => item.category === "Facecare");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;
