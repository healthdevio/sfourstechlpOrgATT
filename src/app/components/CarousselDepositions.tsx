import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import 'tailwindcss/tailwind.css';
import { CardDeposition, CardDepositionProps } from './depositions/CardDeposition';
import sarahmendesImage from '@/assets/images/deposition-cards/sarahmendes-sesa.jpeg';
import { CardAvatarProps } from './depositions/CardAvatar';

interface Props {
    dataSlides: CardDepositionProps[]
}

export function CarousselDepositions({ dataSlides }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="md:hidden relative w-full overflow-hidden px-6 pb-">
            <div className="flex gap-2 z-10">
                {dataSlides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-8 h-2 rounded-sm ${index === selectedIndex ? 'bg-[#F19C1C] w-20' : 'bg-[#F19C1C52]'}`}
                    ></div>
                ))}
            </div>
            <div className="overflow-hidden mt-12" ref={emblaRef}>
                <div className="flex gap-8">
                    {dataSlides.map((slide, index) => (
                        <div key={index} className="flex min-w-full justify-start">
                            <CardDeposition
                                key={`card-${index}`}
                                image={slide.image}
                                name={slide.name}
                                role={slide.role}
                                deposition={slide.deposition}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
