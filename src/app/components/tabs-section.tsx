import * as Tabs from '@radix-ui/react-tabs';
import EnergyIcon from './icons/energy-icon';

export default function TabsSection () {
    return (
        <>
            <section className="bg-[#111111] w-full px-36">
                <div className="flex items-center gap-5 mt-20 mb-16">
                    <img src="/rectangle.svg" alt="" />
                    <p className="font-semibold">WORKFLOW</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-bold text-4xl">Entenda como funciona 
                    nosso workflow.</p>
                    <p className="text-[#7B7B7B]">Fazemos seu sonho acontecer da 
                    ideia ao código.</p>
                </div>
                <div className='mt-16 mb-10'>
                    <Tabs.Root defaultValue="kickoff" orientation="vertical">
                        <Tabs.List className="flex space-x-4 border-b-2 border-[#434343]">
                            <Tabs.Trigger 
                                value="kickoff" 
                                className="py-2 px-4 text-[#7B7B7B] hover:text-[#FF9700] border-b-2 border-transparent focus:outline-none focus:text-[#FFFFFF] focus:font-medium focus:border-[#FF9700] transition flex items-center gap-3">
                                <img src='/energy-icon.svg' /> Kickoff
                            </Tabs.Trigger>
                            <Tabs.Trigger 
                                value="discovery" 
                                className="py-2 px-4 text-[#7B7B7B] hover:text-[#FF9700] border-b-2 border-transparent focus:outline-none focus:text-[#FFFFFF] focus:font-medium focus:border-[#FF9700] transition flex items-center gap-3">
                                <EnergyIcon className="w-5 h-5 text-current group-hover:text-[#FF9700] group-focus:text-[#FF9700]" />
                                Discovery
                            </Tabs.Trigger>
                            <Tabs.Trigger 
                                value="design" 
                                className="py-2 px-4 text-[#7B7B7B] hover:text-[#FF9700] border-b-2 border-transparent focus:outline-none focus:text-[#FFFFFF] focus:font-medium focus:border-[#FF9700] transition flex items-center gap-3">
                                Design
                            </Tabs.Trigger>
                            <Tabs.Trigger 
                                value="code" 
                                className="py-2 px-4 text-[#7B7B7B] hover:text-[#FF9700] border-b-2 border-transparent focus:outline-none focus:text-[#FFFFFF] focus:font-medium focus:border-[#FF9700] transition flex items-center gap-3">
                                Code
                            </Tabs.Trigger>
                            <Tabs.Trigger 
                                value="delivery" 
                                className="py-2 px-4 text-[#7B7B7B] hover:text-[#FF9700] border-b-2 border-transparent focus:outline-none focus:text-[#FFFFFF] focus:font-medium focus:border-[#FF9700] transition flex items-center gap-3">
                                Delivery
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="kickoff">
                            <div>
                                <h3 className='py-10 text-xl font-semibold'>Começando o seu projeto</h3>
                                <p className='text-[#CACACA] pr-80'>Aqui começa seu projeto com a <b>s4S</b>. Neste primeiro momento iremos alinhar todas as informações já discutidas, apresentar nosso entendimento, aprofundar nos 
                                pensamentos do cliente e  alinhar as expectativas.</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="discovery">
                            <div>
                                <h3 className='py-10 text-xl font-semibold'>Começando o seu projeto</h3>
                                <p className='text-[#CACACA] pr-80'>Nessa fase, entendemos detalhadamente as necessidades do cliente e fazemos o brainstorm de sua ideia para entregar um vasto levantamento de requisitos.</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="design">
                            <div>
                                <h3 className='py-10 text-xl font-semibold'>Começando o seu projeto</h3>
                                <p className='text-[#CACACA] pr-80'>A partir dos requisitos levantados, fazemos a prototipagem e ajustes da ideia do cliente, com as melhores práticas de UI e UX, entregando um produto moderno, fácil de usar e bonito.</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="code">
                            <div>
                                <h3 className='py-10 text-xl font-semibold'>Começando o seu projeto</h3>
                                <p className='text-[#CACACA] pr-80'>Aqui damos vida ao protótipo, implementamos as regas de negócio e fazemos acontecer o seu MVP, tudo isso com as melhores tecnologias de mercado e com um processo robusto e escalável.</p>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="delivery">
                            <div>
                                <h3 className='py-10 text-xl font-semibold'>Começando o seu projeto</h3>
                                <p className='text-[#CACACA] pr-80'>Aqui fazemos as considerações finais sobre o projeto, entregas e brindamos a finalização do MVP, ou ideia do cliente.</p>
                            </div>
                        </Tabs.Content>
                    </Tabs.Root>
                </div>
                <div>
                    <button className='flex items-center gap-2 bg-[#FF9700] rounded-3xl py-2 px-4 mb-20'>
                        <p className='text-[#1F1F1F] font-semibold'>Iniciar projeto</p> <img src="/start-project-icon.svg" alt="" />
                    </button>
                </div>
            </section>
        </>
    )
}