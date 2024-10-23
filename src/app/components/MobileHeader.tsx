import React, { useEffect, useState } from 'react';
import logo from '@/assets/logos4s-svg.svg';
import { MenuIcon, X } from 'lucide-react';
import { LinkArrowIcon } from '../components/icons/LinkArrowIcon';
import Image from 'next/image';
import Link from 'next/link';
import Icon4S from '@/app/favicon.ico'
import { whatsAppLink } from '@/utils/whatsappLink';

type MobileHeaderProps = {
  home?: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ home }) => {
  const [headerIsOpened, setHeaderIsOpened] = useState<boolean>(false);
  const [animateOut, setAnimateOut] = useState<boolean>(false);

  const toggleMenu = () => {
    if (headerIsOpened) {
      setAnimateOut(true);
    } else {
      setHeaderIsOpened(true);
    }
  };

  useEffect(() => {
    if (animateOut) {
      const timer = setTimeout(() => {
        setHeaderIsOpened(false);
        setAnimateOut(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [animateOut]);

  return (
    <div className='w-full fixed z-50 top-0'>
      <div className='w-full flex px-7 justify-between items-center h-20 md:border-b bg-[#121214] border-[#232323]'>
        <Link href='/'>
          <Image
            width={35}
            height={0}
            alt='S4s nossa tecnologia está nas pessoas'
            src={Icon4S}
          />
        </Link>
        <button onClick={toggleMenu}>
          {headerIsOpened ? <X color="#FFFFFF" /> : <MenuIcon color="#FFFFFF" />}
        </button>
      </div>

      {headerIsOpened && (
        <div className={`w-full py-16 px-12 absolute flex flex-col items-center justify-center bg-[#121214] ${animateOut ? 'slide-up-animation' : 'slide-down-animation'}`}>
          <div className='flex text-center text-base font-medium flex-col gap-5 text-[#AAAAAA]'>
            <Link href='/'>
              <div>Inicio</div>
            </Link>
            <Link href={home ? '/#nos' : '/?scrollTo=Us'}>
              <p>Quem somos</p>
            </Link>
            <Link
              href={home ? '/#cases' : '/?scrollTo=cases'}>
              <p>Cases</p>
            </Link>
            <Link
              href={home ? '/#ourServices' : '/?scrollTo=ourServices'}>
              <p>Serviços</p>
            </Link>
            <Link
              href={home ? '/#workflow' : '/?scrollTo=workflow'}>
              <p>Workflow</p>
            </Link>
          </div>

          <button className='w-full flex items-center justify-center mt-12 h-14 gap-4 bg-[#E19322] rounded-full'>
            <Link
              className='flex gap-4'
              href={whatsAppLink}>
              <p className='text-[#1F1F1F] text-xl font-semibold'>Iniciar projeto</p>
              <LinkArrowIcon />
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
