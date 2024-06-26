import Image from 'next/image'
import arrow2 from '@/assets/arrow-2.svg'
import { PlayIcon } from './icons/PlayIcon';
import { LinkArrowIcon } from './icons/LinkArrowIcon';
import LopeerBg from '@/assets/looperbg.svg'
import Link from 'next/link';

const HomeScreenMobile: React.FC = () => {
    return(
    <div className="pt-[80px] pb-20 px-4 bg-[#111111]" style={{ backgroundImage: `url(${LopeerBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex justify-center items-center">
            <div className="border-[1px] border-[#222222] rounded-full pr-[85px] text-center">
                <span className="text-[14px]/[14px] text-center font-semibold text-[#1F1F1F] bg-[#E19322] rounded-full font-WorkSans">Olá!</span>
                <span className="text-base text-center font-normal text-[#FFFFFF] ml-[40px] font-WorkSans">No que podemos ajudar?</span>
            </div>
        </div>
        <div className="pt-[84px]">
            <div className="text-center">
                <h1 className="font-WorkSans text-[36px]/[43px] font-medium">Transforme <span className="text-[#FF9700] font-semibold">sua</span> <span className="text-[#FF9700] font-medium">idea</span> em realidade.</h1>
            </div>
            <div className="text-center pt-[32px]">
                <span className="font-WorkSans text-[14px] font-light leading-[21px] text-[#E4E4E4]">Somos fábrica de software de alta velocidade.<br /> Da ideia ao MVP, oferecemos agilidade e tecnologia dentro do orçamento.</span>
            </div>
        </div>
        <div className="pt-[56px]">
            <div className="flex flex-col justify-center items-center gap-4 ">
                <Link className="py-[15px] px-[10px] rounded-full flex items-center space-x-2" href="/contactForm">
                    <span className="font-WorkSans text-[14px]/[14px] text-[#1F1F1F] bg-yellowbutton leading-[14px] xs:text-nowrap font-medium px-[101px] rounded-full flex space-x-2 py-[14px] hover:bg-[#FF9700] transition-colors duration-300">
                        Iniciar projeto
                        <div className="ml-[16px]">
                            <LinkArrowIcon />
                        </div>
                    </span>
                </Link>

                <Link className="border border-[#FFFFFF] font-bold py-[1px] px-[10px] rounded-full flex items-center" href='https://www.instagram.com/s4s.tech/reels/'>
                    <span className="font-WorkSans text-[14px] text-[#FFFF] leading-[14px] font-medium px-[90px] py-[12px] flex items-center">
                        Assista ao vídeo
                    <div className="ml-2">
                        <PlayIcon color='#FFFFFF'/>
                    </div>
                    </span>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default HomeScreenMobile
