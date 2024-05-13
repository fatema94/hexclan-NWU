import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="fixed top-0 w-full bg-white flex justify-between items-center px-8 box-shadow z-10 py-6">
    <img src="/src/assets/image/logo-01.png" className="logo cursor-pointer w-36" alt="" />

    <div className="navigation hidden md:flex items-center">
        <ul className="flex justify-end items-center">
            <li className="mr-8">
                <a href="" className="text-blue-600 hover:text-yellow-500 transition font-bold duration-300">Home</a>
            </li>
            <NavLink to="/event">
            <li className="mr-8">
                <a href="" className="text-blue-600 hover:text-yellow-500 transition font-bold duration-300">News & Event</a>
            </li>
            </NavLink>
            
            <li className="mr-8">
                <a href="" className="text-blue-600 hover:text-yellow-500 transition font-bold duration-300">Our Team</a>
            </li>
            <NavLink to="/about">
            <li className="mr-8">
                <a href="" className="text-blue-600 hover:text-yellow-500 transition font-bold duration-300">About Us</a>
            </li>
            </NavLink>
            
            <li className="mr-8">
                <a href="" className="text-blue-600 hover:text-yellow-500 transition font-bold duration-300">Contact</a>
            </li>
            <li className="">
                <a href="" className="text-blue-600 hover:text-yellow-500 transition font-bold duration-300">Code Ninja</a>
            </li>
        </ul>
        <img src="img/menu.png" id="menu-btn" alt="" />
    </div>
</nav>

        </div>
    );
};

export default Navbar;