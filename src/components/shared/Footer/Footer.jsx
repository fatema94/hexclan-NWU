import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="px-10 py-14 bg-blue-900 flex justify-between mt-20 items-start flex-wrap">
    <div className="footer-col pb-4">
        <h3 className="text-white font-semibold pb-4">Top Products</h3>
        <ul>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Manage Reputation</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Power Tools</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Managed Website</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Marketing Service</li>
        </ul>
    </div>

    <div className="footer-col pb-4">
        <h3 className="text-white font-semibold pb-4">Power Tools</h3>
        <ul>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Jobs</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Marketing Service</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Top Products</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Manage Reputation</li>
        </ul>
    </div>

    <div className="footer-col pb-4">
        <h3 className="text-white font-semibold pb-4">Power Tools</h3>
        <ul>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Managed Website</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Manage Reputation</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Top Products</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Marketing Service</li>
        </ul>
    </div>

    <div className="footer-col pb-4">
        <h3 className="text-white font-semibold pb-4">Guides</h3>
        <ul>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Research</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Experts</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Managed Website</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition duration-300">Marketing Service</li>
        </ul>
    </div>

    <div className="footer-col pb-4">
        <h3 className="text-white font-semibold pb-4">Newsletter</h3>
        <p className="text-gray-400">You can trust us. we only send promo offers.</p>

        <div className="subscribe mt-4">
            <input type="email" placeholder="Your email Address" className="w-56 px-4 py-3 bg-blue-700 border-none outline-none text-white" />
            <a href="#" className="px-6 py-3 bg-yellow-500 text-white font-semibold transition duration-300 hover:bg-white hover:text-blue-900">SUBSCRIBE</a>
        </div>
    </div>

    <div className="copyright w-full pb-4">
        <p className="text-white">Copyright @ 2024 All rights reserved | North Western University, Khulna</p>
        <div className="pro-links flex">
            <i className="fab fa-facebook text-white mr-4"></i>
            <i className="fab fa-instagram text-white mr-4"></i>
            <i className="fab fa-linkedin-in text-white mr-4"></i>
            <i className="fab fa-github text-white mr-4"></i>
            <i className="fab fa-twitter text-white"></i>
        </div>
    </div>
</footer>

        </div>
    );
};

export default Footer;