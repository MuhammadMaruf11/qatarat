import { Link } from 'react-router-dom';

const navItems = [
    { label: 'Home', icon: '🏠', to: '/' },
    { label: 'Cart', icon: '🛒', to: '/cart' },
    { label: 'Orders', icon: '📦', to: '/orders' },
    { label: 'Media', icon: '🖼️', to: '/media' },
    { label: 'Profile', icon: '👤', to: '/profile' },
];

const Footer = () => {
    return (
        <nav className="max-w-3xl mx-auto fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl border-t border-gray-200 flex justify-around py-2 z-20">
            {navItems.map((item, idx) => (
                <Link key={idx} to={item.to} className="flex flex-col items-center text-xs hover:text-[#2B153C]">
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default Footer;
