// src/app/components/signup/SignUpForm.tsx

import React from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

interface SignUpFormProps {
    name: string;
    email: string;
    password: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSubmit,
}) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white/80 shadow-xl rounded-xl backdrop-blur-md">
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-purple-500">
                <FiUser className="text-gray-500 mr-3" />
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent focus:outline-none"
                    required
                />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-purple-500">
                <FiMail className="text-gray-500 mr-3" />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent focus:outline-none"
                    required
                />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-purple-500">
                <FiLock className="text-gray-500 mr-3" />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent focus:outline-none"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
                Sign Up
            </button>
        </form>
    );
};
