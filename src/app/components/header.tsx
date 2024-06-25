import Link from 'next/link';
import Image from 'next/image'
import logo from '@/assets/logos4s-svg.svg'

export default function Header() {
  return (
      <header className="fixed top-0 left-0 w-full pb-[38px] pt-[38px] pl-[100px] pr-[100px] bg-black text-white flex items-center justify-between border-b-[1px] border-[#222222] z-50">
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
            <Link href="/#inicio">
              <p className="hover:text-gray-300 font-WorkSans text-[16px] cursor-pointer">Inicio</p>
            </Link>
            <Link href="/#nos">
              <p className="hover:text-gray-300 font-WorkSans text-[16px] cursor-pointer">Quem Somos</p>
            </Link>
            <Link href="/#cases">
              <p className="hover:text-gray-300 font-WorkSans text-[16px] cursor-pointer">Cases</p>
            </Link>
            <Link href="/#ourServices">
              <p className="hover:text-gray-300 font-WorkSans text-[16px] cursor-pointer">Serviços</p>
            </Link>
            <Link href="/#workflow">
              <p className="hover:text-gray-300 font-WorkSans text-[16px] cursor-pointer">Workflow</p>
            </Link>
        </nav>
          <Link href="/contactForm" legacyBehavior>
            <a className="bg-[#E19322] text-[#1F1F1F] rounded-full font-WorkSans" style={{ borderRadius: '100px', padding: '8px 24px', gap: '10px' }}>
              Iniciar Projeto
            </a>
          </Link>
      </header>
  );
}
