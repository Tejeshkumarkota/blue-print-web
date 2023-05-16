import Residence from "@/components/Home/Residence/Residence";
import SearchArea from "@/components/Home/SearchArea/SearchArea";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Blogs from "@/components/Home/Blogs/Blogs";
import Videos from "@/components/Home/Videos/Videos";
import PopularSearches from "@/components/Home/PopularSearches/PopularSearches";

const HomePage = () => {
  return (
    <>
      <SearchArea />
      <Residence />
      <Testimonial />
      <Blogs />
      <Videos />
      <PopularSearches/>
    </>
  );
};

export default HomePage;
