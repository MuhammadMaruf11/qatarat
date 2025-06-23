interface Props {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded border ${currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-200'
                        }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
