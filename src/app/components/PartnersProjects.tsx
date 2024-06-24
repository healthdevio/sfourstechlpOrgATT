'use client';
import React, { useRef, useState } from 'react';

import SaudeHDThumbnail from '@/app/components/images/saudeHd.jpg';
import FiiboThumbnail from '@/app/components/images/fiibo.jpg';
import ElegeBrThumbnail from '@/app/components/images/elegeBr.jpg';
import Image from 'next/image';
import GrayArrowIcon from './icons/grayArrow';
import YellowArrowIcon from './icons/yellowArrow';
import Link from 'next/link';

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
      description: "Somos especialistas em impulsionar o valor dos negócios através de soluções sob medida, abrangendo desde Inteligência Artificial até.",
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
      description: "Somos especialistas em impulsionar o valor dos negócios através de soluções sob medida, abrangendo desde Inteligência Artificial até.",
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
      name: "??????",
      description: "Somos especialistas em impulsionar o valor dos negócios através de soluções sob medida, abrangendo desde Inteligência Artificial até.",
      thumbnail: ElegeBrThumbnail,
      partnerPage: "https://elegebr.com.br/",
      tags: [
        {
          nameTag: "???",
        },
        {
          nameTag: "???",
        },
      ]
    },
    {
      name: "??????",
      description: "Somos especialistas em impulsionar o valor dos negócios através de soluções sob medida, abrangendo desde Inteligência Artificial até.",
      thumbnail: ElegeBrThumbnail,
      partnerPage: "https://elegebr.com.br/",
      tags: [
        {
          nameTag: "???",
        },
        {
          nameTag: "???",
        },
      ]
    },
  ]

  return (
    <div className='w-full flex flex-col px-24 mb-24 mt-10 border-t border-[#232323]'>
      <div className='w-full flex items-center mb-20 mt-10 justify-between'>
        <div className='cursor-pointer' onClick={() => scrollProjects('left')}>
          <GrayArrowIcon />
        </div>

        <div className='flex items-center gap-2'>
          <div className={`transition-all duration-300 ease-in-out w-${clickCount >= 1 ? '6' : '3'} h-[2px] ${clickCount === 1 ? 'bg-[#F19C1C]' : 'bg-[#F19C1C]/[32%]'}`} />
          <div className={`transition-all duration-300 ease-in-out w-${clickCount >= 2 ? '6' : '3'} h-[2px] ${clickCount === 2 ? 'bg-[#F19C1C]' : 'bg-[#F19C1C]/[32%]'}`} />
          <div className={`transition-all duration-300 ease-in-out w-${clickCount >= 3 ? '6' : '3'} h-[2px] ${clickCount === 3 ? 'bg-[#F19C1C]' : 'bg-[#F19C1C]/[32%]'}`} />
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
  )
}

export default PartnersProjects;