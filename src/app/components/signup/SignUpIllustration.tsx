// src/app/components/signup/SignUpIllustration.tsx

import Image from 'next/image';
import React from 'react';

export const SignUpIllustration: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <Image
                src="/static/qr3.jpg" // Replace with your actual image path
                alt="Sign Up Illustration"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
            />
        </div>
    );
};
