import React from 'react';
import { useForm } from 'react-hook-form';
import type { User } from '../../types/usersTypes';

interface ProfileFormProps {
    user: User;
    onSubmit: (data: User) => void;
    onCancel: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ user, onSubmit, onCancel }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<User>({
        defaultValues: user,
    });

    const submitHandler = (data: User) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>

            <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                    {...register('username', { required: 'Name is required' })}
                    className="w-full border p-2 rounded"
                    type="text"
                />
                {errors.username && <p className="text-red-600">{errors.username.message}</p>}
            </div>

            <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    className="w-full border p-2 rounded"
                    type="email"
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block mb-1 font-medium">Status</label>
                <select {...register('status', { required: true })} className="w-full border p-2 rounded">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            <div className="flex gap-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    {isSubmitting ? 'Saving...' : 'Save'}
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default ProfileForm;
