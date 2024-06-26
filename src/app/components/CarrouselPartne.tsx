'use client';

import React from 'react';
import Image from 'next/image';
import ClinicaSIm from '@/assets/imagensCarrousel/clinicasim.png'
import Crea from '@/assets/imagensCarrousel/crea.png'
import DoctClin from '@/assets/imagensCarrousel/doctclin.png'
import Elege from '@/assets/imagensCarrousel/elege.br.png'
import Fibo from '@/assets/imagensCarrousel/fiibo.png'
import Icc from '@/assets/imagensCarrousel/icc.png'
import InvestPlus from '@/assets/imagensCarrousel/investplus.png'
import LivSaude from '@/assets/imagensCarrousel/livsaude.png'
import Mpro from '@/assets/imagensCarrousel/mpro.png'
import SaudeHD from '@/assets/imagensCarrousel/saudehd.png'
 
export function CarrouselPartne() {
    const images = [
        ClinicaSIm,
        Crea,
        DoctClin,
        Elege,
        Fibo,
        Icc,
        InvestPlus,
        LivSaude,
        Mpro,
        SaudeHD
    ];

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
                .carousel-track:hover {
                    animation-play-state: paused;
                }
                .flex-none {
                    min-width: 160px;
                }
            `}</style>
            <div className="carousel">
                <div className="carousel-track">
                    {images.concat(images).map((src, index) => (
                        <div key={index} className="flex-none w-32 h-32 p-2 flex items-center justify-center">
                            <Image src={src} alt={`Parceiro ${index + 1}`} layout="responsive" width={0} height={0} objectFit="contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
