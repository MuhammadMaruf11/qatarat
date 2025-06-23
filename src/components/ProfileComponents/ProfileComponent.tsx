import React, { useEffect, useState } from 'react';
import UserTable from '../Table/UserTable';
import ProfileForm from '../Form/ProfileForm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import type { User } from '../../types/usersTypes';
import { fetchUsers, updateUser } from '../../features/users/usersSlice';

const ProfileComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector(state => state.users);

    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // Filter and search users
    const filteredUsers = users.filter(user => {
        if (statusFilter !== 'all' && user.status !== statusFilter) return false;
        if (!user.username.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !user.email.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    });

    // Pagination setup (mocked)
    const itemsPerPage = 5;
    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const onUserSelect = (user: User) => setSelectedUser(user);

    const onUserUpdate = (data: User) => {
        dispatch(updateUser(data));
        setSelectedUser(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">User Profile Management</h1>

            {loading && <p>Loading users...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <UserTable
                        users={paginatedUsers}
                        onUserSelect={onUserSelect}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pageCount={pageCount}
                    />
                </div>
                <div className="flex-1">
                    {selectedUser ? (
                        <ProfileForm user={selectedUser} onSubmit={onUserUpdate} onCancel={() => setSelectedUser(null)} />
                    ) : (
                        <p>Select a user from the table to edit their profile.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
