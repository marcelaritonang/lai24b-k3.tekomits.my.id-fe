"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { LoginForm } from '../components/login/LoginForm';
import { LoginIllustration } from '../components/login/LoginIllustration';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
            <Navbar 
                showSidebarToggle={false}
                onGetStartedClick={() => {}}
            />
            
            <main className="flex-1 flex items-center justify-center p-4 pt-20">
                <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <LoginForm 
                        email={email}
                        password={password}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit}
                    />
                    <LoginIllustration />
                </div>
            </main>
        </div>
    );
}