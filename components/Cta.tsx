'use client';

import { useState } from 'react';

export default function Cta() {
    const [name, setName] = useState('');

    const handleClick = () => {
        const number = '22891902824';
        const message = `Bonjour, je m'appelle ${name.trim() || '...'} et je souhaite commencer mon investissement.`;

        const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="flex flex-col items-center justify-center py-8 container">
            <h1 className="w-full text-center text-2xl md:text-4xl font-bold mb-8">
                Commencez votre investissement maintenant.
            </h1>
            <p className="text-center text-sm md:text-xl w-full mb-6">
                Contactez-nous maintenant pour effectuer votre dépôt et commencer à gagner des millions
            </p>
            <div className="flex sm:flex-col md:grid grid-cols-3 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#333333] col-span-2 px-3 rounded  placeholder:text-gray-300"
                />
                <button
                    onClick={handleClick}
                    className="bg-green-500 hover:bg-green-600 text-[#FFFFFF] px-4 py-2 rounded"
                >
                    Commencer maintenant
                </button>
            </div>
        </div>
    );
}
