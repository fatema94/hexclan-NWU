import React from 'react';

const Banner = () => {
    return (
        <div style={{backgroundImage:"url('/src/assets/image/back.jpg')"}}>
        <section id="home" className="bg-gradient-to-b from-opacity-30 via-opacity-70 to-opacity-100 bg-cover bg-center h-screen flex flex-col justify-center items-center text-center py-40">
         <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        Enhance Your Journey With HEX CLAN
        </h2>
       <p className="text-black text-sm md:text-base lg:text-lg mb-6 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsum laboriosam architecto tempora explicabo ratione pariatur accusantium consequatur sed odit?
       </p>
    <div className="">
        <a href="#" className=" text-xl p-4 font-bold rounded-xl  bg-blue-800 text-white">Learn More</a>
    </div>
</section>

        </div>
    );
};

export default Banner;