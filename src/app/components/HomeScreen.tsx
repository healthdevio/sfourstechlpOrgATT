import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image'
import arrow2 from '@/assets/arrow-2.svg'
import { PlayIcon } from './icons/PlayIcon';
import { LinkArrowIcon } from './icons/LinkArrowIcon';
import LopeerBg from '@/assets/looperbg.svg'
import Link from 'next/link';

export default function HomeScreen() {
    return (
        <div className="pt-[165px] pb-20 bg-[#111111]" style={{ backgroundImage: `url(${LopeerBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex justify-center items-center">
                <div className="border-[1px] border-[#222222] rounded-full pt-[16px] pb-[16px] pl-[6px] pr-[80px] text-center">
                    <span className="text-base/[16px] text-center font-semibold text-[#1F1F1F] bg-[#E19322] rounded-full pt-[12px] pb-[12px] pl-[34px] pr-[34px] font-WorkSans">Olá!</span>
                    <span className="text-base/[16px] text-center font-normal text-[#FFFFFF] ml-[71px] font-WorkSans">No que podemos ajudar?</span>
                </div>
            </div>
            <div className="pt-[80px]">
                <div className="text-center">
                    <h1 className="font-WorkSans text-[100px] font-medium leading-[120px]">
                        <Typewriter
                            words={[
                                'Realize suas ideias.',
                                'Inove, transforme, cresça.',
                                'Tecnologia para sucesso.',
                                'Soluções que inspiram.',
                                'Ágil e eficiente.',
                                'Visão, código, inovação.'
                            ]}
                            loop={0}
                            cursor
                            typeSpeed={90}
                            deleteSpeed={70}
                            delaySpeed={5500}
                        />
                    </h1>
                </div>
                <div className="text-center pt-[32px]">
                    <span className="font-WorkSans text-[24px] leading-[36px] text-[#E4E4E4]">Somos fábrica de software de <span className="text-[#E19322]">alta velocidade</span>. Da ideia ao MVP,<br /> oferecemos <span className="text-[#E19322]">agilidade</span> e <span className="text-[#E19322]">tecnologia</span> dentro do orçamento.</span>
                </div>
            </div>
            <div className="pt-[56px]">
                <div className="flex justify-center items-center">
                    <Link className="py-2 px-4 rounded-full flex items-center space-x-2" href="/contactForm">
                        <span className="font-WorkSans text-[16px] text-[#1F1F1F] bg-yellowbutton leading-[28px] font-medium px-4 rounded-full flex space-x-2 py-2 hover:bg-[#FF9700] transition-colors duration-300">
                            Iniciar projeto
                            <div className="ml-[16px] pb-[5px] pt-[5px]">
                                <LinkArrowIcon />
                            </div>
                        </span>
                    </Link>

                    <Link className="border border-[#FFFFFF] font-bold py-2 px-4 rounded-full flex items-center space-x-2" href='https://www.instagram.com/s4s.tech/reels/'>
                        <span className="font-WorkSans text-[16px] text-[#FFFF] leading-[28px] font-medium">Assista ao vídeo</span>
                        <PlayIcon color='#FFFFFF' />
                    </Link>
                </div>
            </div>
        </div>
    );
}
