'use client';
import React, { useRef, useState } from 'react';

import SaudeHDThumbnail from '@/assets/saudehd.png';
import FiiboThumbnail from '@/assets/fiiboResize.png';
import ElegeBrThumbnail from '@/assets/elegeresize.png';
import MPROThumbnail from '@/assets/mpresize.png';
import CreaThumbnail from '@/assets/creaResize.png';
import InvestPlusThumbnail from '@/assets/investPlusThumbnail.jpg';
import Image from 'next/image';
import GrayArrowIcon from './icons/grayArrow';
import YellowArrowIcon from './icons/yellowArrow';
import Link from 'next/link';
import { TitleSection } from './TitleSection';

const PartnersProjects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [clickCount, setClickCount] = useState(1);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const { current } = projectsRef;
      const scrollAmount = (current.offsetWidth + 12 * 2) / 3 * 2;
      let newScrollPosition;

      if (direction === 'left') {
        newScrollPosition = current.scrollLeft - scrollAmount;
        setClickCount(prevCount => Math.max(0, prevCount - 1));
      } else {
        newScrollPosition = current.scrollLeft + scrollAmount;
        setClickCount(prevCount => prevCount + 1);
      }

      current.scroll({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      name: "Saúde HD",
      description: "Somos a solução intuitiva, completa e de baixo custo que cuida da sua clínica enquanto você prioriza a experiência de quem confia em você.",
      thumbnail: SaudeHDThumbnail,
      partnerPage: "https://saudehd.com.br/",
      tags: [
        {
          nameTag: "Desenvolvimento",
        },
        {
          nameTag: "Design",
        },
      ]
    },
    {
      name: "Fiibo",
      description: "Com a Fiibo ficou mais fácil cuidar da sua saúde! Nós proporcionamos a liberdade para escolher os produtos e serviços de saúde e bem-estar que melhor atendem às suas necessidades, tudo em um só lugar.",
      thumbnail: FiiboThumbnail,
      partnerPage: "https://fiibo.com.br/",
      tags: [
        {
          nameTag: "Web",
        },
        {
          nameTag: "Mobile",
        },
        {
          nameTag: "Design",
        },
        {
          nameTag: "Consultoria",
        },
      ]
    },
    {
      name: "Elege BR",
      description: "Somos especialistas em impulsionar o valor dos negócios através de soluções sob medida, abrangendo desde Inteligência Artificial até.",
      thumbnail: ElegeBrThumbnail,
      partnerPage: "https://elegebr.com.br/",
      tags: [
        {
          nameTag: "Desenvolvimento",
        },
        {
          nameTag: "Design",
        },
      ]
    },
    {
      name: "Ministério Público do Estado de Rondonia",
      description: "Com o advento da Constituição Federal de 1988, o Ministério Público teve suas funções ampliadas e a principal delas é defender os direitos de qualquer cidadão e da sociedade.",
      thumbnail: MPROThumbnail,
      partnerPage: "https://www.mpro.mp.br",
      tags: [
        {
          nameTag: "Desenvolvimento",
        },
        {
          nameTag: "Design",
        },
        {
          nameTag: "Mobile",
        },
      ]
    },
    {
      name: "CREA-CE",
      description: "Órgão máximo diretivo e deliberativo, é constituído por conselheiros, na qualidade de profissionais representantes diretos das entidades de classe.",
      thumbnail: CreaThumbnail,
      partnerPage: "https://www.creace.org.br/",
      tags: [
        {
          nameTag: "Desenvolvimento",
        },
        {
          nameTag: "Design",
        },
      ]
    },
    {
      name: "Invest Plus",
      description: "Através de nossa plataforma, estamos dando acesso a um mercado que há poucos anos era restrito a grandes fundos.",
      thumbnail: InvestPlusThumbnail,
      partnerPage: "https://www.creace.org.br/",
      tags: [
        {
          nameTag: "Desenvolvimento",
        },
        {
          nameTag: "Design",
        },
      ]
    },
  ]

  function getWidthClass(indicatorNumber: number, clickCount: number) {
    return `transition-all duration-300 ease-in-out ${clickCount >= indicatorNumber ? 'w-6' : 'w-3'} h-[2px] ${clickCount == indicatorNumber ? 'bg-[#FF9700]' : 'bg-[#FF9700]/[32%]'} rounded-full`;
  }

  return (
    <div className='w-full h-full bg-black'>
      <div className='w-full flex flex-col px-24 mb-24 mt-10 border-t border-[#232323] xs:hidden md:block'>
        <div className='w-full flex items-center mb-20 mt-10 justify-between'>
          <div className='cursor-pointer' onClick={() => scrollProjects('left')}>
            <GrayArrowIcon />
          </div>

          <div className='flex items-center gap-2'>
            <div className={getWidthClass(1, clickCount)} />
            <div className={getWidthClass(2, clickCount)} />
            <div className={getWidthClass(3, clickCount)} />
          </div>

          <div className='cursor-pointer' onClick={() => scrollProjects('right')}>
            <YellowArrowIcon />
          </div>
        </div>

        <div
          ref={projectsRef}
          style={{ scrollBehavior: 'smooth' }}
          className='flex gap-12 overflow-x-hidden'>
          {
            projects.map((project, index) => (
              <div
                className='flex-none w-1/3 h-full rounded-lg'
                key={index}>
                <div className='w-full bg-[#FF9700]'>
                  <Link
                    href={project.partnerPage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.thumbnail}
                      alt='partnerThumbnail'
                      width={500}
                      height={300}
                      layout="responsive"
                      className='rounded-md'
                    />
                  </Link>
                </div>
                <h1 className='mt-8 mb-6 text-white text-2xl'>{project.name}</h1>
                <p className='text-[#909090]'>
                  {project.description}
                </p>
                <div className='flex gap-2 mt-10'>
                  {
                    project.tags.map((tag, tagIndex) => (
                      <div
                        className='py-2 px-4 border flex items-center justify-center border-[#FF9700] hover:bg-[#FF9700]/[32%] duration-100 transition-colors rounded-full cursor-pointer'
                        key={tagIndex}>
                        <h1 className='text-white text-base'>{tag.nameTag}</h1>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className='w-full flex flex-col px-6 mb-24  mt-10 bg-black xs:block md:hidden'>
        <div className='pt-[56px]'>
          <TitleSection title='Cases'/>
          <h1 className='text-[22px]/[33px] font-semibold font-WorkSans'>Transformando ideias <br/> em realidade.</h1>
          <div className='pb-[56px] pt-[24px]'>
            <span className='text-[14px]/[21px] font-normal font-WorkSans text-[#909090]'>Designers e desenvolvedores trabalhando lado a lado para entregarmos um projeto mais eficiente e completo!</span>
          </div>
        </div>
        <div className='w-full flex gap-10 overflow-x-auto'>
          {
            projects.map((project, index) => (
              <div
                className='flex-none w-[calc(100%-3rem)] max-w-[500px] h-full rounded-lg'
                key={index}>
                <div className='w-full'>
                  <Link
                    href={project.partnerPage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.thumbnail}
                      alt='partnerThumbnail'
                      width={500}
                      height={300}
                      layout="responsive"
                      className='rounded-md'
                    />
                  </Link>
                </div>
                <h1 className='mt-8 mb-6 text-white text-2xl'>{project.name}</h1>
                <p className='text-[#909090]'>
                  {project.description}
                </p>
                <div className='flex gap-2 mt-10'>
                  {
                    project.tags.map((tag, tagIndex) => (
                      <div
                        className='py-2 px-4 border flex items-center justify-center border-[#FF9700] hover:bg-[#FF9700]/[32%] duration-100 transition-colors rounded-full cursor-pointer'
                        key={tagIndex}>
                        <h1 className='text-white text-base'>{tag.nameTag}</h1>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PartnersProjects;