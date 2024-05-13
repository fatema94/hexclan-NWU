import React from 'react';

const Registration = () => {
    return (
        <div>
           
           <section id="registration" className="px-20 py-6 md:py-12 flex justify-between items-center" style={{ backgroundImage: 'linear-gradient(rgba(99,112,168,0.5), rgba(81,91,233,0.5)),url("img/signup.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="reminder text-white">
        <p className='text-xl'>Get an events for Free</p>
        <h1 className='text-5xl font-bold'>Registration To Get It</h1>

        <div className="time flex mt-8">
            <div className="date bg-opacity-25 bg-gray-600 bg-blur shadow-xl rounded-lg px-6 py-4 mr-4">
                18 <br /> Days
            </div>
            <div className="date bg-opacity-25 bg-gray-600 bg-blur shadow-xl rounded-lg px-6 py-4 mr-4">
                23 <br /> Hours
            </div>
            <div className="date bg-opacity-25 bg-gray-600 bg-blur shadow-xl rounded-lg px-6 py-4 mr-4">
                06 <br /> Minutes
            </div>
            <div className="date bg-opacity-25 bg-gray-600 bg-blur shadow-xl rounded-lg px-6 py-4">
                58 <br /> Seconds
            </div>
        </div>
    </div>

    <div className="form flex flex-col gap-2 bg-white rounded-lg p-12 shadow-xl">
        <h3 className="text-lg font-bold mb-4">Create Free Account NOW!</h3>

        <input type="text" placeholder="Name" className="mb-4 px-4 py-3 border border-purple-700 focus:outline-none focus:border-purple-900" />
        <input type="email" placeholder="Email ID" className="mb-4 px-4 py-3 border border-purple-700 focus:outline-none focus:border-purple-900" />
        <input type="text" placeholder="Contact Number" className="mb-4 px-4 py-3 border border-purple-700 focus:outline-none focus:border-purple-900" />

        <div className="">
            <a href="#" className="yellow text-white font-bold py-3 px-8 rounded-xl bg-yellow-500 hover:bg-yellow-600 transition duration-300">Submit Form</a>
        </div>
    </div>
</section>


        </div>
    );
};

export default Registration;