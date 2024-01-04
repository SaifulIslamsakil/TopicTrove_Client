

const TotalWork = () => {
    return (
        <div className="lg:h-[80vh] flex justify-center items-center bg-gradient-to-r from-purple-200  to-red-100 p-5  ">

            <div className=" space-y-10" >
                <h4 className=" text-3xl font-bold text-center">Over 1200+ <br /> completed work & Still counting.</h4>
                <div className=" grid md:grid-cols-3 lg:grid-cols-5 text-center space-y-2 gap-10">
                    <div className=" bg-white shadow-xl px-16 py-10 rounded-lg flex justify-center  ">
                        <div>
                            <img className=" mx-auto" src="https://i.ibb.co/GCfbczz/fun-fact-1-1.png" alt="" />
                            <p className=" text-4xl font-bold text-sky-400 text-shadow-sm ">434</p>
                            <p className=" text-2xl font-semibold  ">user</p>
                        </div>
                    </div>
                    <div className=" bg-white shadow-xl px-16 py-10 rounded-lg flex justify-center  ">
                        <div>
                            <img className=" mx-auto" src="https://i.ibb.co/sqrQv7m/fun-fact-2-2.png" alt="" />
                            <p className=" text-4xl font-bold text-orange-300 text-shadow-sm ">1235</p>
                            <p className=" text-2xl font-semibold  ">Topic</p>
                        </div>
                    </div>
                    <div className=" bg-white shadow-xl px-16 py-10 rounded-lg flex justify-center  ">
                        <div>
                            <img className=" mx-auto" src="https://i.ibb.co/bsNstZ7/fun-fact-3-2.png" alt="" />
                            <p className=" text-4xl font-bold text-rose-400 text-shadow-sm ">4334</p>
                            <p className=" text-2xl font-semibold  ">Forum</p>
                        </div>
                    </div>
                    <div className=" bg-white shadow-xl px-16 py-10 rounded-lg flex justify-center  ">
                        <div>
                            <img className=" mx-auto" src="https://i.ibb.co/7vCq6Y8/fun-fact-4-2.png" alt="" />
                            <p className=" text-4xl font-bold text-green-400 text-shadow-sm ">4434</p>
                            <p className=" text-2xl font-semibold  ">Replies</p>
                        </div>
                    </div>
                    <div className=" bg-white shadow-xl px-16 py-10 rounded-lg flex justify-center  ">
                        <div>
                            <img className=" mx-auto" src="https://i.ibb.co/BNKNDS6/fun-fact-5-2.png" alt="" />
                            <p className=" text-4xl font-bold text-purple-400 text-shadow-sm ">634</p>
                            <p className=" text-2xl font-semibold  ">Tags</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TotalWork;