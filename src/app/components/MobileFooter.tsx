import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import footerLogoImage from "@/../public/logo-footer.svg"
import iconSocialImageFb from "@/../public/fb-icon.svg"
import iconSocialImageIg from "@/../public/ig-icon.svg"
import iconSocialImageBe from "@/../public/be-icon.svg"
import iconSocialImageIn from "@/../public/in-icon.svg"

const MobileFooter: React.FC = () => {
  return (
    <div>
      <div className='w-full border-t bg-[#232323] border-[#232323] px-10 py-11'>
        <div className='flex'>
          <Image
            src={footerLogoImage}
            alt="Logo da empresa S4S"
          />

          <h1 className='text-[#A8A8B3] text-base ml-6'>Startup para <br />Startups</h1>
        </div>

        <p className='mt-8 text-[#A8A8B3]'>s4S 2020</p>
        <p className='text-[#A8A8B3]'>Todos os direitos reservados</p>

        <div className="flex gap-6 mt-8">
          <Link
            href={'#'}
          >
            <Image
              src={iconSocialImageFb}
              alt="Link para a rede social Facebook"
            />
          </Link>
          <Link
            href={'https://www.linkedin.com/company/s4stech/mycompany/'}
          >
            <Image
              src={iconSocialImageIn}
              alt="Link para a rede social Linkedin"
            />
          </Link>
          <Link
            href={'https://www.instagram.com/s4s.tech/'}
          >
            <Image
              src={iconSocialImageIg}
              alt="Link para a rede social Instagram"
            />
          </Link>
          <Link
            href={'#'}
          >
            <Image
              src={iconSocialImageBe}
              alt="Link para a rede social Behance"
            />
          </Link>
        </div>

        <div className='mt-12 flex flex-col gap-4'>
          <h1>Sobre</h1>
          <p className='text-[#A8A8B3]'>Startup para Statups</p>
          <p className='text-[#A8A8B3]'>O que fazemos</p>
          <p className='text-[#A8A8B3]'>Cases</p>
          <p className='text-[#A8A8B3]'>Quem somos</p>
        </div>

        <div className='mt-12 flex flex-col gap-4'>
          <h1>Acessoria</h1>
          <p className='text-[#A8A8B3]'>E-mail: contato@healthdev.io</p>
        </div>

        <div className='mt-12 flex flex-col gap-4'>
          <h1>Telefone/WhastAPP</h1>
          <p className='text-[#A8A8B3]'>+55 85 99954-7116</p>
        </div>

        <div className='mt-12 flex flex-col gap-4'>
          <h1>Endereço</h1>
          <p className='text-[#A8A8B3]'>Avenida Dom Luís, 176, Mezanino - Aldeota</p>
        </div>
      </div>
    </div>
  )
}

export default MobileFooter;