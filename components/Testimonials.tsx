"use client";
import { useState } from "react";
import { createPortal } from "react-dom";

const testimonials = [
    {
        id: 1,
        name: 'KAITY',
        country: 'Cliente Camérounais',
        thumbnail: '/thumbnails/kaity.png',
        video: '/videos/kaity.mp4',
    },
    {
        id: 2,
        name: 'SAMITE',
        country: 'Client Sénégalais',
        thumbnail: '/thumbnails/samite.png',
        video: '/videos/samite.mp4',
    },
    {
        id: 3,
        name: 'ALICIA',
        country: 'Cliente Camerounaise',
        thumbnail: '/thumbnails/alicia.png',
        video: '/videos/alicia.mp4',
    },
    {
        id: 4,
        name: 'SADIO',
        country: 'Client Ivoirien',
        thumbnail: '/thumbnails/sadio.png',
        video: '/videos/sadio.mp4',
    },
    {
        id: 5,
        name: 'LAUREN',
        country: 'Cliente Togolaise',
        thumbnail: '/thumbnails/lauren.png',
        video: '/videos/lauren.mp4',
    },
];

export default function Testimonials() {
    const [activeId, setActiveId] = useState(3);
    const [showModal, setShowModal] = useState(false);

    const active = testimonials.find(t => t.id === activeId);

    const handleClick = (id: number) => {
        if (id === activeId) {
            setShowModal(true);
        } else {
            setActiveId(id);
        }
    };

    return <div className="flex flex-col w-full gap-y-8 justify-center py-4 mt-8 md:py-8 container">
        <h1 className="title text-2xl font-bold px-4 border-l-4 border-l-[#34D399]">Ce que disent nos clients</h1>
        <div className="flex justify-center items-center gap-3 overflow-x-auto">
            {testimonials.map((t) => (
                <div
                    key={t.id}
                    className={`cursor-pointer transition-all duration-300 flex-shrink-0 ${t.id === activeId
                        ? 'w-64 h-80'
                        : 'w-24 h-72 opacity-60 hover:opacity-80'
                        } relative rounded-lg overflow-hidden`}
                    onClick={() => handleClick(t.id)}
                >
                    <img
                        src={t.thumbnail}
                        alt={t.name}
                        className="object-cover w-full h-full"
                    />
                    {t.id === activeId && (
                        <>
                            <div className="absolute bottom-3 left-3 z-10 text-[#FFFFFF]">
                                <p className="font-bold">{t.name}</p>
                                <p className="text-sm ">{t.country}</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <div className="w-12 h-12 bg-[#FFFFFF] text-black text-2xl rounded-full flex items-center justify-center">
                                    ▶
                                </div>
                            </div>
                        </>
                    )}
                    {t.id !== activeId && (
                        // <div className="absolute top-2 left-2 rotate-90 origin-bottom-left text-3xl tracking-widest font-semibold text-[#FFFFFF] dark:text-[#34D399] bg-[#34D399] dark:bg-[#FFFFFF] dark:bg-[#0F172A]">
                        <div className="absolute top-2 left-2 rotate-90 origin-bottom-left text-3xl tracking-widest font-semibold text-[#34D399] bg-[#0F172A]">
                            {t.name}
                        </div>
                    )}
                </div>
            ))}
        </div>

        {showModal &&
            typeof window !== 'undefined' &&
            createPortal(
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(false);
                    }}
                >
                    <div className="relative max-w-3xl">
                        <video
                            controls
                            autoPlay
                            src={active?.video}
                            className="w-auto h-[75%] rounded-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-3xl cursor-pointer"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>
                    </div>
                </div>,
                document.body
            )}
    </div>
}