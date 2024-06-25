import Image from 'next/image'
import arrow2 from '@/assets/arrow-2.svg'
import { PlayIcon } from './icons/PlayIcon';
import { LinkArrowIcon } from './icons/LinkArrowIcon';
import Link from 'next/link';

export default function HomeScreen() {
    return (
        <div className="pt-20 pb-20">
            <div className="flex justify-center items-center">
                <div className="border-[1px] border-[#222222] rounded-full pt-[16px] pb-[16px] pl-[6px] pr-[80px] text-center">
                    <span className="text-base/[16px] text-center font-semibold text-[#1F1F1F] bg-[#E19322] rounded-full pt-[12px] pb-[12px] pl-[34px] pr-[34px] font-WorkSans">Olá!</span>
                    <span className="text-base/[16px] text-center font-normal text-[#FFFFFF] ml-[71px] font-WorkSans">No que podemos ajudar?</span>
                </div>
            </div>
            <div className="pt-[80px]">
                <div className="text-center">
                    <h1 className="font-WorkSans text-[100px] font-medium leading-[120px]">Transforme <span className="text-[#FF9700] font-semibold">sua</span> <br /> <span className="text-[#FF9700] font-medium">idea</span> em realidade.</h1>
                </div>
                <div className="text-center pt-[32px]">
                    <span className="font-WorkSans text-[24px] leading-[36px] text-[#E4E4E4]">Somos fábrica de software de alta velocidade. Da ideia ao MVP,<br /> oferecemos agilidade e tecnologia dentro do orçamento.</span>
                </div>
            </div>
            <div className="pt-[56px]">
                <div className="flex justify-center items-center">
                    <button className=" py-2 px-4 rounded-full flex items-center space-x-2">
                        <span className="font-WorkSans text-[16px] text-[#1F1F1F] bg-[#FF9700] leading-[28px] font-medium px-4 rounded-full flex space-x-2 py-2">
                            Iniciar projeto
                            <div className="ml-[16px] pb-[5px] pt-[5px]">
                            <LinkArrowIcon />
                            </div>
                        </span>
                    </button>
                    <button className="border border-[#FFFFFF] font-bold py-2 px-4 rounded-full flex items-center space-x-2">
                        <span className="font-WorkSans text-[16px] text-[#FFFF] leading-[28px] font-medium">Assista ao vídeo</span>
                        <PlayIcon
                            color='#FFFFFF' />
                    </button>
                </div>
            </div>
        </div>
    );
}