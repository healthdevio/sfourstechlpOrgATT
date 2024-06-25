'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Life from '@/assets/4life.svg';
import atheva from "@/assets/atheva.svg";
import fcj from '@/assets/fcj.svg';
import fiibo from '@/assets/fiibo.svg';
import knola from '@/assets/knola.svg';
import totalCross from '@/assets/totalcross.svg';
import liv from '@/assets/livsaude.svg';
import topyou from '@/assets/top2you.svg';
import byteme from '@/assets/byteme.svg';
import inside from '@/assets/insideout2.svg';
import Crea from '@/assets/Logo CREA.png'
import invest from '@/assets/Invest.png'
import mpro from '@/assets/mpro.png'

export function CarrouselPartne() {
    const images = [
        Life,
        atheva,
        fcj,
        fiibo,
        knola,
        totalCross,
        liv,
        topyou,
        byteme,
        inside,
        Crea,
        invest,
        mpro
    ];

    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (carouselRef.current) {
                const { current } = carouselRef;
                const scrollAmount = current.offsetWidth / 3;
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

                if (current.scrollLeft + current.offsetWidth >= current.scrollWidth) {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="bg-[#131313] py-[42px] overflow-hidden">
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-150px * ${images.length}));
                    }
                }
                .carousel-track {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                    animation: scroll 30s linear infinite;
                }
                .flex-none {
                    min-width: 170px;
                }
            `}</style>
            <div className="carousel">
                <div ref={carouselRef} className="carousel-track">
                    {images.concat(images).map((src, index) => (
                        <div key={index} className="flex-none w-32 h-32 p-2 flex items-center justify-center">
                            <Image src={src} alt={`Parceiro ${index + 1}`} layout="responsive" width={150} height={150} objectFit="contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
