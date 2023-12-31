import About from "../../Components/About/About";
import Communityposts from "../../Components/Communityposts/Communityposts";
import Footer from "../../Components/Footer/Footer";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
import NewCommunities from "../../Components/NewCommunities/NewCommunities";
import TotalWork from "../../Components/TotalWork/TotalWork";


const Home = () => {
    return (
        <div className=" space-y-20">
            <HomeBanner></HomeBanner> 
            <HomeProducts></HomeProducts>
            <About></About>
            <Communityposts></Communityposts>
            <TotalWork></TotalWork>
            <NewCommunities></NewCommunities>
            <Footer></Footer>
        </div>
    );
};

export default Home;