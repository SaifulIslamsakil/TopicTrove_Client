
import { FaLongArrowAltRight } from "react-icons/fa";
const NewCommunities = () => {
    return (
        <div className=" p-5 space-y-10">
            <div className=" flex justify-center ">
                <div className=" text-center space-y-10">
                    <img className=" mx-auto" src="https://i.ibb.co/QFHJ5P8/com-sm-1.png" alt="" />
                    <h4 className=" text-4xl font-bold">New to Communities?</h4>
                    <button className=" btn bg-purple-600 text-white text-lg flex items-center mx-auto hover:bg-white hover:text-black hover:border-2 hover:border-purple-600">Join the community <FaLongArrowAltRight /> </button>
                </div>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className=" flex items-center justify-center p-5 border rounded-lg hover:border-t-8 hover:border-t-purple-600 hover:shadow-2xl duration-300 ">
                        <div className=" space-y-5 text-center">
                            <img className=" mx-auto" src="https://i.ibb.co/Rpk5dQ8/com-1.png" alt="" />
                            <p className=" text-2xl font-semibold">Find answers and ask new questions</p>
                            <button className=" flex items-center mx-auto gap-2  hover:text-purple-600">How to Search Communities  <FaLongArrowAltRight /> </button>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center p-5 border rounded-lg hover:border-t-8 hover:border-t-purple-600 hover:shadow-2xl duration-300 ">
                        <div className=" space-y-5 text-center">
                            <img className=" mx-auto" src="https://i.ibb.co/Rpk5dQ8/com-1.png" alt="" />
                            <p className=" text-2xl font-semibold">Find answers and ask new questions</p>
                            <button className=" flex items-center mx-auto gap-2  hover:text-purple-600">How to Search Communities  <FaLongArrowAltRight /> </button>
                        </div>
                    </div>
                    <div className=" flex items-center justify-center p-5 border rounded-lg hover:border-t-8 hover:border-t-purple-600 hover:shadow-2xl duration-300 ">
                        <div className=" space-y-5 text-center">
                            <img className=" mx-auto" src="https://i.ibb.co/Rpk5dQ8/com-1.png" alt="" />
                            <p className=" text-2xl font-semibold">Find answers and ask new questions</p>
                            <button className=" flex items-center mx-auto gap-2  hover:text-purple-600">How to Search Communities  <FaLongArrowAltRight /> </button>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default NewCommunities;