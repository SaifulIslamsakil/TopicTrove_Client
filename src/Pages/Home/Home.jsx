import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";


const Home = () => {
    return (
        <div className=" space-y-20">
            <HomeBanner></HomeBanner> 
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;