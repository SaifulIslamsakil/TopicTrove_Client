import { useEffect, useState } from "react";


const HomeProducts = () => {
    const [productData, setProductData] = useState([])
    const [moreCommunitis, setMoreCommunitis] = useState(false)
    useEffect(() => {
        fetch("HomeProducts.json")
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])
    const handleMoreCommunitis = ()=>{
        setMoreCommunitis(!moreCommunitis)
    }
    return (
        <div className=" space-y-20 p-5">
            <h2 className=" text-center text-3xl font-semibold lg:w-96 mx-auto">Select your product to find Related communities</h2>
            <div className=" grid md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                {
                    productData.slice(0, 5)?.map(product => <div key={product.id} className=" text-center space-y-3">
                        <div className=" shadow-2xl shadow-purple-300 p-5 h-40 w-40 mx-auto ">
                            <img className=" h-full w-full" src={product.img} alt="" />
                        </div>
                        <p className=" text-xl font-semibold">{product.name}</p>
                        <p>3 Posts</p>
                    </div>)
                }

            </div>
            <div onClick={handleMoreCommunitis} className=" border-y border-purple-500 p-5">
                <h2 className=" text-center text-2xl font-semibold text-purple-600">More Communitis {moreCommunitis ? <span>-</span>:<span>+</span>}</h2>
            </div>
            <div className={`grid md:grid-cols-3 lg:grid-cols-5 gap-5 ${moreCommunitis ? "block": "hidden"}` }>
                {
                    productData.slice(5)?.map(product => <div key={product.id} className=" text-center space-y-3">
                        <div className=" shadow-2xl shadow-purple-300 p-5 h-40 w-40 mx-auto ">
                            <img className=" h-full w-full" src={product.img} alt="" />
                        </div>
                        <p className=" text-xl font-semibold">{product.name}</p>
                        <p>3 Posts</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default HomeProducts;