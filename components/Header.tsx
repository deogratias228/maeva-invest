'use client';
import React from "react";
import PrimaryCta from "./PrimaryCta";

// Petit composant SVG pour une étoile 5 branches
const Star = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2.5l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77l-6.18 3.24L7 14.63l-5-4.87 6.91-1L12 2.5z" />
    </svg>
);

export default function Header() {
    return (
        <div className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <img
                src="./header_bg.jpg"
                alt="Image d'un tableau de d'investissement avec des gains inimaginables"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-[#FFFFFF] dark:bg-[#0F172A] opacity-95 z-10"></div> */}
            <div className="absolute inset-0 bg-[#0F172A] opacity-95 z-10"></div>

            {/* Stars */}
            <div className="absolute inset-0 z-15 pointer-events-none">
                {/* Etoiles qui tournent */}
                <div className="absolute top-10 left-10 w-6 h-6 opacity-70 animate-spin-slow">
                    <Star />
                </div>
                <div className="absolute top-20 right-20 w-4 h-4 opacity-50 animate-spin-slow">
                    <Star />
                </div>

                {/* Etoiles qui pulsent */}
                <div className="absolute top-40 left-1/3 w-3 h-3 opacity-80 animate-pulse">
                    <Star />
                </div>
                <div className="absolute bottom-20 right-1/4 w-5 h-5 opacity-60 animate-pulse">
                    <Star />
                </div>

                {/* Etoiles filantes */}
                <div className="shooting-star top-0 left-1/2"></div>
                <div className="shooting-star top-10 right-10 delay-2000"></div>

                {/* Stars background */}
                <div className="absolute inset-0 z-10 overflow-hidden">
                    <div className="stars"></div>
                    <div className="stars2"></div>
                    <div className="stars3"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 py-16 text-center ">
                <h1 className="text-3xl md:text-5xl font-bold mb-8">
                    Boostez votre capital en moins de 1h.
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-3">
                    Investissez facilement, sécurisé, recevez vos gains rapidement.
                </p>
                <PrimaryCta />
            </div>

            <style jsx>{`
        /* Spin animation lente */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        /* Shooting star */
        .shooting-star {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(
            45deg,
            white,
            rgba(255, 255, 255, 0) 70%
          );
          border-radius: 9999px;
          opacity: 0.8;
          transform: rotate(45deg);
          animation: shooting-star-anim 3s linear infinite;
        }
        .shooting-star.delay-2000 {
          animation-delay: 2s;
        }

        @keyframes shooting-star-anim {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateX(-500px) translateY(500px) rotate(45deg);
            opacity: 0;
          }
        }

          /* Étoiles avec box-shadow générées */
        .stars, .stars2, .stars3 {
        position: absolute;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow:
            50px 100px white,
            150px 200px white,
            250px 300px white,
            350px 400px white,
            450px 150px white,
            550px 250px white,
            650px 350px white,
            750px 450px white,
            850px 100px white,
            950px 200px white;
        animation: animStars 50s linear infinite;
        }

        .stars2 {
        box-shadow:
            100px 150px white,
            200px 250px white,
            300px 100px white,
            400px 200px white,
            500px 300px white;
        animation: animStars 100s linear infinite;
        }

        .stars3 {
        box-shadow:
            75px 50px white,
            175px 150px white,
            275px 250px white,
            375px 350px white;
        animation: animStars 150s linear infinite;
        }

        @keyframes animStars {
            from {
                transform: translateY(0px);
            }
            to {
                transform: translateY(-1000px);
            }
        }

      `}</style>
        </div>
    );
}
