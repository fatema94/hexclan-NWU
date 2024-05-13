import React from 'react';

const About = () => {
    return (
        <div className=''>
            <div className='flex my-20 gap-4 justify-center py-96'style={{backgroundImage:"url('/src/assets/image/back2.jpg')"}}>
                <h1 className='text-6xl text-blue-900 font-bold'>ABOUT</h1>
                <img src="/src/assets/image/logo-01.png" className="w-80" alt="" />
            </div>
            <section id="about-container" className="flex py-8 md:py-12 px-8 md:px-12">
    <div className="about-img w-full md:w-1/2 pr-0 md:pr-12">
        <img src="/src/assets/image/a.png" alt="" className="w-full" />
    </div>
    <div className="about-text w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl text-blue-800 text-center md:text-left font-bold mb-4 md:mb-6">
            Welcome to HEX CLAN, Enhance your skills with us.
        </h2>
        <p className=" text-lg text-center md:text-left mb-4 md:mb-6">
            You can start and finish one of these popular courses in under a day - for free! Check out the list below.. Take the course for free.
        </p>

        <div className="about-fe flex flex-wrap items-start justify-center md:justify-start">
            <div className="fe-text flex items-center mb-4">
                <img src="/src/assets/image/fe1.png" alt="" className="w-12 md:w-16 mr-4 md:mr-6" />
                <div>
                    <h5 className="text-xl text- font-semibold mb-2">Lorem, ipsum dolor.</h5>
                    <p className="text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque fugit facere beatae reiciendis iusto aliquam architecto deserunt at! Nostrum, delectus!
                    </p>
                </div>
            </div>
            <div className="fe-text flex items-center mb-4">
                <img src="/src/assets/image/fe2.png" alt="" className="w-12 md:w-16 mr-4 md:mr-6" />
                <div>
                    <h5 className="text-xl  font-semibold mb-2">Lifetime Access</h5>
                    <p className="text-gray-600">
                        You can start and finish one of these popular courses in under our site
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="features" className="py-8 md:py-12 px-8 md:px-12">
    <h1 className="text-3xl md:text-4xl text-center font-semibold text-blue-800 mb-4 md:mb-6">Awesome Features</h1>
    <p className="text-gray-600 text-lg text-center mb-8">Replenish man have thing gathering lights yielding shall you</p>

    <div className="fea-base flex justify-center md:justify-between">
        <div className="border border-blue-800 p-6 mx-4 shadow-2xl  text-center w-full md:w-1/3 mb-6 md:mb-0">
            <i className="fas fa-graduation-cap text-4xl text- mb-4"></i>
            <h3 className="text-xl text- font-semibold mb-2">Scholorship Facility</h3>
            <p className="text-gray-600">
                One make creepeth, man bearing theira firmament won't great heaven
            </p>
        </div>

        <div className="border border-blue-800 shadow-2xl p-6 mx-4  text-center w-full md:w-1/3 mb-6 md:mb-0">
            <i className="fa-solid fa-book-bookmark text-4xl text- mb-4"></i>
            <h3 className="text-xl  font-semibold mb-2">Dell Online Course</h3>
            <p className="text-gray-600">
                One make creepeth, man bearing theira firmament won't great heaven
            </p>
        </div>

        <div className=" border border-blue-800 mx-4 shadow-2xl p-6 text-center w-full md:w-1/3 mb-6 md:mb-0">
            <i className="fas fa-award text-4xl  mb-4"></i>
            <h3 className="text-xl  font-semibold mb-2">Global Certification</h3>
            <p className="text-gray-600">
                One make creepeth, man bearing theira firmament won't great heaven
            </p>
        </div>
    </div>
</section>

<section id="trust" className="py-8 md:py-12 px-8 md:px-12">
    <h1 className="text-3xl md:text-4xl text-center font-semibold text-blue-800 mb-4 md:mb-6">Trusted By</h1>
    <p className="text-gray-600 text-lg text-center mb-8">Replenish man have thing gathering lights yielding shall you</p>
    <div className="trust-img flex justify-center gap-4 items-center">
        <img src="/src/assets/image/trust (1).png" alt="" className="w-14 h-auto mr-4" />
        <img src="/src/assets/image/trust (2).png" alt="" className="w-14 h-auto mr-4" />
        <img src="/src/assets/image/trust (3).png" alt="" className="w-14 h-auto mr-4" />
        <img src="/src/assets/image/trust (4).png" alt="" className="w-14 h-auto mr-4" />
        <img src="/src/assets/image/trust (5).png" alt="" className="w-14 h-auto mr-4" />
        <img src="/src/assets/image/trust (6).png" alt="" className="w-14 h-auto mr-4" />
    </div>
</section>

        </div>
    );
};

export default About;