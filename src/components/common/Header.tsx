import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
            {/* Left: Hamburger */}
            <div className="w-1/3">
                <button className="w-8 h-8 bg-[#65358A26] rounded-full border border-[#65358A26] flex items-center justify-center cursor-pointer">
                    <img src="/img/icons/menu.svg" alt="menu" className="p-2" />
                </button>
            </div>

            {/* Center: Logo */}
            <div className="w-1/3">
                <Link to='/'> <img className="h-10 w-20 mx-auto" src="/img/logo.png" alt="logo" /></Link>
            </div>

            {/* Right: Language and Logout */}
            <div className="flex gap-2 justify-end items-center w-1/3">
                <button className="w-8 h-8 bg-[#65358A26] rounded-full border border-[#65358A26] flex items-center justify-center cursor-pointer">
                    <img src="/img/icons/bell.png" alt="bell" className="p-2" />
                </button>
                <button className="px-3 py-2.5 bg-whote rounded-full border border-[#65358A26] flex items-center justify-center cursor-pointer">
                    <img src="/img/icons/flag.png" alt="flag" className="h-4 pe-2" />
                    Eng</button>
                <button className="bg-[#2B153C] text-white text-sm px-4 py-1.5 rounded-full">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;
