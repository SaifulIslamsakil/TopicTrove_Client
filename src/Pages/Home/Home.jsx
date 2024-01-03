import Communityposts from "../../Components/Communityposts/Communityposts";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";


const Home = () => {
    return (
        <div className=" space-y-20">
            <HomeBanner></HomeBanner> 
            <HomeProducts></HomeProducts>
            <Communityposts></Communityposts>
        </div>
    );
};

export default Home;