import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logos4s-svg.svg';

export default function Header() {
  const [activeRoute, setActiveRoute] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveRoute(window.location.hash);
    }
  }, []);

  const handleLinkClick = (hash: any) => {
    setActiveRoute(hash);
  };

  const getLinkClass = (path: any) => {
    return activeRoute === path ? 'text-white' : 'text-gray-300 hover:text-white';
  };

  return (
    <header className="fixed top-0 left-0 w-full py-9 px-24 bg-black text-white flex items-center justify-between border-b-[1px] border-[#222222] z-50">
      <div className="flex items-center">
        <Image
          className="ml-[30px] pb-[5px] pt-[5px]"
          width={110}
          height={0}
          alt='S4s nossa tecnologia está nas pessoas'
          src={logo}
        />
      </div>
      <nav className="flex gap-12">
        <Link href="/#inicio" legacyBehavior>
          <a className={`${getLinkClass('/#inicio')} font-WorkSans text-base cursor-pointer`} onClick={() => handleLinkClick('/#inicio')}>Inicio</a>
        </Link>
        <Link href="/#nos" legacyBehavior>
          <a className={`${getLinkClass('/#nos')} font-WorkSans text-base cursor-pointer`} onClick={() => handleLinkClick('/#nos')}>Quem Somos</a>
        </Link>
        <Link href="/#cases" legacyBehavior>
          <a className={`${getLinkClass('/#cases')} font-WorkSans text-base cursor-pointer`} onClick={() => handleLinkClick('/#cases')}>Cases</a>
        </Link>
        <Link href="/#ourServices" legacyBehavior>
          <a className={`${getLinkClass('/#ourServices')} font-WorkSans text-base cursor-pointer`} onClick={() => handleLinkClick('/#ourServices')}>Serviços</a>
        </Link>
        <Link href="/#workflow" legacyBehavior>
          <a className={`${getLinkClass('/#workflow')} font-WorkSans text-base cursor-pointer`} onClick={() => handleLinkClick('/#workflow')}>Workflow</a>
        </Link>
      </nav>
      <Link href="/contactForm" legacyBehavior>
        <a className="bg-yellowbutton text-[#1F1F1F] text-base font-medium rounded-full font-WorkSans" style={{ borderRadius: '100px', padding: '8px 24px', gap: '10px' }}>
          Iniciar Projeto
        </a>
      </Link>
    </header>
  );
}
