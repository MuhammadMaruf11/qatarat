import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../api/axios';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const SingleComponents: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!productId) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get<Product>(`/products/${productId}`);
                setProduct(response.data);
            } catch (err) {
                setError('Failed to load product.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <p className="text-center mt-10 text-blue-600">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
    if (!product) return <p className="text-center mt-10">Product not found.</p>;

    return (
        <div className="max-w-5xl mx-auto p-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-80 object-contain mx-auto"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-gray-500 capitalize">{product.category}</p>
                    <p className="text-xl font-semibold text-green-600">${product.price}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleComponents;
