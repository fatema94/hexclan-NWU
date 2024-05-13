import React from 'react';

const Event = () => {
    return (
        <div>
            <div className='py-80 m-4 ' style={{backgroundImage:"url('/src/assets/image/back1.jpg')"}}>
                <h1 className='text-center text-6xl font-bold text-white my-20'>News & Events</h1>
            </div>
            <section id="blog-container" className="flex justify-between items-start px-8">
    <div className="blogs w-3/5">
        <div className="post pb-12">
            <img src="/src/assets/image/b1.jpg" alt="" className="w-full rounded-md" />
            <h3 className="text-xl font-semibold pt-6 pb-4">Learn Web Development in the easiest way</h3>
            <p className="text-gray-600 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Optio enim, rerum voluptas non dolorem
                architecto libero, tempora laborum fugiat, deleniti, iusto maxime rem similique laudantium nostrum
                ad quod esse ullam modi illo?
            </p>
            <a href="post.html" className="text-white bg-blue-500 rounded-full px-8 py-3 font-semibold hover:bg-blue-600 transition duration-300">Read More</a>
        </div>
        <div className="post pb-12">
            <img src="/src/assets/image/b2.jpg" alt="" className="w-full rounded-md" />
            <h3 className="text-xl font-semibold pt-6 pb-4">Learn Web Development in the easiest way</h3>
            <p className="text-gray-600 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Optio enim, rerum voluptas non dolorem
                architecto libero, tempora laborum fugiat, deleniti, iusto maxime rem similique laudantium nostrum
                ad quod esse ullam modi illo?
            </p>
            <a href="post.html" className="text-white bg-blue-500 rounded-full px-8 py-3 font-semibold hover:bg-blue-600 transition duration-300">Read More</a>
        </div>
        <div className="post pb-12">
            <img src="/src/assets/image/b3.jpg" alt="" className="w-full rounded-md" />
            <h3 className="text-xl font-semibold pt-6 pb-4">Learn Web Development in the easiest way</h3>
            <p className="text-gray-600 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Optio enim, rerum voluptas non dolorem
                architecto libero, tempora laborum fugiat, deleniti, iusto maxime rem similique laudantium nostrum
                ad quod esse ullam modi illo?
            </p>
            <a href="post.html" className="text-white bg-blue-500 rounded-full px-8 py-3 font-semibold hover:bg-blue-600 transition duration-300">Read More</a>
        </div>
        <div className="post pb-12">
            <img src="/src/assets/image/b4.png" alt="" className="w-full rounded-md" />
            <h3 className="text-xl font-semibold pt-6 pb-4">Learn Web Development in the easiest way</h3>
            <p className="text-gray-600 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Optio enim, rerum voluptas non dolorem
                architecto libero, tempora laborum fugiat, deleniti, iusto maxime rem similique laudantium nostrum
                ad quod esse ullam modi illo?
            </p>
            <a href="post.html" className="text-white bg-blue-500 rounded-full px-8 py-3 font-semibold hover:bg-blue-600 transition duration-300">Read More</a>
        </div>
    </div>
    <div className=" w-2/5 m-20">
        <h2 className="text-2xl font-bold pb-2">Categories</h2>
        <hr className="border-gray-400 mb-2" />
        <a href="#" className="text-gray-700 block hover:text-blue-500 transition duration-300">Programing Contest</a>
        <hr className="border-gray-400 mb-2" />
        <a href="#" className="text-gray-700 block hover:text-blue-500 transition duration-300">Project Showcase</a>
        <hr className="border-gray-400 mb-2" />
        <a href="#" className="text-gray-700 block hover:text-blue-500 transition duration-300">App Development</a>
        <hr className="border-gray-400 mb-2" />
        <a href="#" className="text-gray-700 block hover:text-blue-500 transition duration-300">Hackathon</a>
        <hr className="border-gray-400 mb-2" />
        <a href="#" className="text-gray-700 block hover:text-blue-500 transition duration-300">Poster</a>
        <hr className="border-gray-400 mb-2" />
        <a href="#" className="text-gray-700 block hover:text-blue-500 transition duration-300">*********</a>
    </div>
</section>

        </div>
    );
};

export default Event;