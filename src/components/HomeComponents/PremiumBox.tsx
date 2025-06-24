import { Link } from "react-router-dom";

const PremiumBox = () => {
    return (
        <div className="fixed left-2 top-4/5 -translate-y-1/2 bg-linear-to-r from-[#65358B] to-[#CFB4E4] border border-[#CFB4E4] from-5% to-100% text-white px-12 py-3 rounded-r-2xl w-80 shadow-md z-10">
            <p className="font-bold text-lg mb-1">⭐ Premium</p>
            <p className="">We have subscription, <br /> do you want to subscribe?</p>
            <Link to='/' className="flex justify-center items-center gap-2 w-40 h-8 mt-2 text-white bg-linear-to-r from-[#65358A] to-[#2B153C] text-sm px-3 py-1 rounded-full">
                <img src="/img/icons/watch.svg" alt="watch" /> <span>Subscribe Now</span>
            </Link>
        </div>
    );
};

export default PremiumBox;
