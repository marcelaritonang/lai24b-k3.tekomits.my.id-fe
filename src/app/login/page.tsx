"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppLayout from '../components/AppLayout';
import { LoginForm } from '../components/login/LoginForm';
import { LoginIllustration } from '../components/login/LoginIllustration';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
            const response = await fetch('http://localhost:8080/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
    
            const data = await response.json();
            console.log('Login response:', data); // Debug respons

            // Pastikan token ada dalam respons
            if (response.ok && data?.data?.token) {
                localStorage.setItem('token', data.data.token);
                router.push('/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Failed to login. Please try again.');
        } finally {
            setLoading(false);
        }
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
                            error={error}
                            loading={loading}
                        />
                        <LoginIllustration />
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}
