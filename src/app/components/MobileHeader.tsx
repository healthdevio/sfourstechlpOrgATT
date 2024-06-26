import React, { useEffect, useState } from 'react';
import logo from '@/assets/logos4s-svg.svg';
import { MenuIcon, X } from 'lucide-react';
import { LinkArrowIcon } from '../components/icons/LinkArrowIcon';
import Image from 'next/image';
import Link from 'next/link';

const MobileHeader: React.FC = () => {
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
    <div className='w-full'>
      <div className='w-full flex px-7 justify-between items-center h-20 md:border-b bg-[#121214] border-[#232323]'>
        <Link href='/'>
          <Image
            width={90}
            height={0}
            alt='S4s nossa tecnologia está nas pessoas'
            src={logo}
          />
        </Link>
        <button onClick={toggleMenu}>
          {headerIsOpened ? <X /> : <MenuIcon />}
        </button>
      </div>

      {headerIsOpened && (
        <div className={`w-full py-16 px-12 absolute flex flex-col items-center justify-center bg-[#121214] ${animateOut ? 'slide-up-animation' : 'slide-down-animation'}`}>
          <div className='flex text-center text-base font-medium flex-col gap-5 text-[#AAAAAA]'>
            <Link href='/'>
              <div>Inicio</div>
            </Link>
            <Link href='/?scrollTo=Us'>
              <div>Quem somos</div>
            </Link>
            <Link href='/?scrollTo=cases'>
              <div>Cases</div>
            </Link>
            <Link href='/?scrollTo=ourServices'>
              <div>Serviços</div>
            </Link>
            <Link href='/?scrollTo=workflow'>
              <div>Workfow</div>
            </Link>
          </div>

          <button className='w-full flex items-center justify-center mt-12 h-14 gap-4 bg-[#E19322] rounded-full'>
            <Link
              className='flex gap-4'
              href='/contactForm'>
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