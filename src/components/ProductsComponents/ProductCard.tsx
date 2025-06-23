import React from 'react';
import type { Product } from '../../types/productsType';
import { Link } from 'react-router-dom';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    console.log('object', product.id);
    return (
        <Link to={`/products/${product.id}`} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
            />
            <h3 className="text-lg font-semibold mt-4 line-clamp-2">{product.title}</h3>
            <p className="text-sm text-gray-500 mt-2">${product.price}</p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{product.category}</p>
        </Link>
    );
};

export default ProductCard;
