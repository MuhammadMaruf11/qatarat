import React from 'react';
import type { User } from '../../types/usersTypes';

interface UserTableProps {
    users: User[];
    onUserSelect: (user: User) => void;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    statusFilter: 'all' | 'active' | 'inactive';
    setStatusFilter: React.Dispatch<React.SetStateAction<'all' | 'active' | 'inactive'>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    pageCount: number;
}

const UserTable: React.FC<UserTableProps> = ({
    users,
    onUserSelect,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    currentPage,
    setCurrentPage,
    pageCount,
}) => {
    return (
        <div>
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full sm:w-1/2"
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')}
                    className="border p-2 rounded w-full sm:w-1/4"
                >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            {/* Table */}
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="border border-gray-300 p-2 ">Name</th>
                        <th className="border border-gray-300 p-2 ">Email</th>
                        <th className="border border-gray-300 p-2 ">Status</th>
                        <th className="border border-gray-300 p-2 ">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 && (
                        <tr>
                            <td colSpan={4} className="text-center p-4">
                                No users found.
                            </td>
                        </tr>
                    )}
                    {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50 cursor-pointer text-left">
                            <td className="border border-gray-300 p-2">{user.username}</td>
                            <td className="border border-gray-300 p-2">{user.email}</td>
                            <td className="border border-gray-300 p-2 capitalize">{user.status}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => onUserSelect(user)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4 space-x-2">
                {[...Array(pageCount)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UserTable;
