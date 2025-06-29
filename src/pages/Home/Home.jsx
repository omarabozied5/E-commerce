import Category from "../../components/Categories/Category";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type={"featured"} />
      <Category />
      <FeaturedProducts type={"trending"} />
      <Contact />
    </div>
  );
};

export default Home;
