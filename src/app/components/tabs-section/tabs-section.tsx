"use client";

import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import EnergyIcon from '../icons/energyIcon';
import MagnifyingGlassIcon from '../icons/magnifying-glass';
import BookMountain from '../icons/bookMountain';
import CodeIcon from '../icons/codeIcon';
import DeliveryIcon from '../icons/deliveryIcon';
import { TabsContent } from './tabs-content';
import { TabItem } from './tab-item';
import { MobileStep } from './mobile-step';
import { Description } from './tabs-description';
import Link from 'next/link';
import { TitleSection } from '../TitleSection'
import startProjectIcon from '@/../public/start-project-icon.svg'
import Image from 'next/image';
import { LinkArrowIcon } from '../icons/LinkArrowIcon';

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState('kickoff');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section className="bg-[#111111] w-full px-4 md:px-8 lg:px-16 xl:px-36 py-24">
      <TitleSection 
        title='Workflow'
      />
      <Description />
      <div className="mt-20 md:mt-20 mb-10">
        <div className="block md:hidden">
          <MobileStep 
            icon={EnergyIcon} 
            title="Kickoff" 
            description="Aqui começa seu projeto com a s4S. Neste primeiro momento iremos alinhar todas as informações já discutidas, apresentar nosso entendimento, aprofundar nos pensamentos do cliente e alinhar as expectativas." 
            iconSize="w-60 h-60 pb-48" 
          />
          <hr className='border-[#232323]' />
          <MobileStep 
            icon={MagnifyingGlassIcon} 
            title="Discovery" 
            description="Nessa fase, entendemos detalhadamente as necessidades do cliente e fazemos o brainstorm de sua ideia para entregar um vasto levantamento de requisitos." 
            iconSize="w-56 h-56 pb-48" 
          />
          <hr className='border-[#232323]' />
          <MobileStep 
            icon={BookMountain} 
            title="Design" 
            description="A partir dos requisitos levantados, fazemos a prototipagem e ajustes da ideia do cliente, com as melhores práticas de UI e UX, entregando um produto moderno, fácil de usar e bonito." 
            iconSize="w-48 h-48 pb-36" 
          />
          <hr className='border-[#232323]' />
          <MobileStep 
            icon={CodeIcon} 
            title="Code" 
            description="Aqui damos vida ao protótipo, implementamos as regras de negócio e fazemos acontecer o seu MVP, tudo isso com as melhores tecnologias de mercado e com um processo robusto e escalável." 
            iconSize="w-44 h-40 pb-28" 
          />
          <hr className='border-[#232323]' />
          <MobileStep 
            icon={DeliveryIcon} 
            title="Delivery" 
            description="Aqui fazemos as considerações finais sobre o projeto, entregas e brindamos a finalização do MVP, ou ideia do cliente." 
            iconSize="w-28 h-28 pb-16" 
          />
        </div>
        <div className="hidden md:block">
          <Tabs.Root defaultValue={'kickoff'} onValueChange={handleTabChange} orientation="vertical">
            <Tabs.List className="flex flex-col md:flex-row md:space-x-4 md:border-b-2 border-[#434343]">
              <TabItem value="kickoff" icon={EnergyIcon} label="Kickoff" />
              <TabItem value="discovery" icon={MagnifyingGlassIcon} label="Discovery" />
              <TabItem value="design" icon={BookMountain} label="Design" />
              <TabItem value="code" icon={CodeIcon} label="Code" />
              <TabItem value="delivery" icon={DeliveryIcon} label="Delivery" />
            </Tabs.List>
            <Tabs.Content value="kickoff">
              <TabsContent 
                title="Começando o seu projeto" 
                description={<div>Aqui começa seu projeto com a <strong>s4S</strong>. Neste primeiro momento iremos alinhar todas as informações já discutidas, apresentar nosso entendimento, aprofundar nos pensamentos do cliente e alinhar as expectativas.</div>}
              />
            </Tabs.Content>
            <Tabs.Content value="discovery">
              <TabsContent 
                title="Discovery" 
                description="Nessa fase, entendemos detalhadamente as necessidades do cliente e fazemos o brainstorm de sua ideia para entregar um vasto levantamento de requisitos." 
              />
            </Tabs.Content>
            <Tabs.Content value="design">
              <TabsContent 
                title="Design" 
                description="A partir dos requisitos levantados, fazemos a prototipagem e ajustes da ideia do cliente, com as melhores práticas de UI e UX, entregando um produto moderno, fácil de usar e bonito." 
              />
            </Tabs.Content>
            <Tabs.Content value="code">
              <TabsContent 
                title="Code" 
                description="Aqui damos vida ao protótipo, implementamos as regras de negócio e fazemos acontecer o seu MVP, tudo isso com as melhores tecnologias de mercado e com um processo robusto e escalável." 
              />
            </Tabs.Content>
            <Tabs.Content value="delivery">
              <TabsContent 
                title="Delivery" 
                description="Aqui fazemos as considerações finais sobre o projeto, entregas e brindamos a finalização do MVP, ou ideia do cliente." 
              />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
      <div>
        <Link href="/contactForm">
          <button className="hidden md:flex items-center gap-2 bg-[#FF9700] rounded-3xl py-2 px-4 mb-20">
            <p className="text-[#1F1F1F] font-semibold">Iniciar projeto</p>
            <LinkArrowIcon />
          </button>
        </Link>
      </div>
    </section>
  );
}
