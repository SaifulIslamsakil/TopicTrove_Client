

const About = () => {
    return (
        <div className=" h-auto lg:h-[80vh] w-full p-5 bg-purple-100 lg:flex justify-between items-center">
            <div className=" space-y-5 flex-1">
                <img src="https://i.ibb.co/DDnQbk0/quote-top.png" alt="" />
                <h1 className=" text-3xl font-bold">TopicTrove cares <br /> deeplyabout journalism.</h1>
                <p className=" text-xl font-semibold text-gray-600 lg:w-[500px]">Cheeky why my good sir nancy boy off his nut at public school excuse my French well bog bugger porkies, eaton he legged it owt to do with me gutted.!</p>
                <p className=" font-bold text-xl">Chaplain Hasan Arif</p>
                <p className=" font-semibold">CEO, KbDoc</p>
                <img src="https://i.ibb.co/wK7FNbg/quote-bottom.png" alt="" />
            </div>
            <div className=" bg-gradient-to-r from-purple-200 to-red-100 lg:w-[500px]  rounded-full">
                <img src="https://i.ibb.co/dDst1bQ/journalism-1.png" alt="" />
            </div>
        </div>
    );
};

export default About;