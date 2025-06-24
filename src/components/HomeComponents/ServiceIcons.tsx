import { Link } from "react-router-dom";

const services = [
    { symbol: '/img/symbol/img-1.png' },
    { symbol: '/img/symbol/img-2.png' },
    { symbol: '/img/symbol/img-3.png' },
];

const ServiceIcons = () => {
    return (
        <section className="max-w-3xl flex justify-between mx-auto items-center gap-6 bg-white rounded-xl shadow-sm my-8">
            {services.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-50 h-50">
                        <Link to='/products'> <img src={item.symbol} alt={`symbol-${idx}`} className="" /></Link>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ServiceIcons;
