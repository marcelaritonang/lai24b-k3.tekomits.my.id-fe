"use client";

import { useState } from 'react';

import AppLayout from '../components/AppLayout';
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
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
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
        </AppLayout>
    );
}