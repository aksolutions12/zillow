import TopSection from "./TopSection";
import Categories from "./Categories";
import ListBlogDesign from "./ListBlogDesign";
import ZillowPremiumFooter from "../../components/ZillowPremiumFooter";
import BackSearch from "./BackSearch";

const BlogCategory = () => {
  return (
    <div className="bg-white">
      <div className="px-10 ">
        <TopSection />
        <BackSearch />

        <div className=" lg:flex ">
          <div className=" lg:w-7/12 ">
            <ListBlogDesign />
          </div>
          <div className="  lg:w-5/12 ">
            <Categories />
          </div>
        </div>

        <ZillowPremiumFooter />
      </div>
    </div>
  );
};

export default BlogCategory;
