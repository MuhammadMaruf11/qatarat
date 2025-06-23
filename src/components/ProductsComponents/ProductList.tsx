import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchProducts } from '../../features/products/productsSlice';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { products, loading, error } = useAppSelector((state) => state.products);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return products.slice(start, start + itemsPerPage);
    }, [products, currentPage]);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Explore Products</h1>

            {loading && <p className="text-center text-blue-600">Loading products...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default ProductList;
