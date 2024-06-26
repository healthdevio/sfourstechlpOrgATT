import { ServicesList } from './ServicesList'
import itConsultingImage from '@/assets/images/services/ti-consulting.png'
import uxuiImage from '@/assets/images/services/uxui-design.png'
import developmentImage from '@/assets/images/services/development.png'
import iaImage from '@/assets/images/services/ia.png'
import { TitleSection } from '../TitleSection'

export function OurServicesSection() {
    return (
        <section className='w-full bg-[#0A0A0B] py-14 md:p-24'>
            <TitleSection title='Nossos Serviços'
            titleColor="white"/>
            <div className='flex flex-col md:flex-row items-start md:justify-between md:items-center px-6 md:px-0 md:mb-24 mb-10 gap-6'>
                <div className='text-3xl md:text-[2.5rem] font-semibold leading-[33px] md:leading-[60px] text-white'>
                    Serviços projetados para <br />
                    acelerar sua produção.
                </div>
                <div className='text-base font-normal text-left md:text-right text-[#7B7B7B]'>
                    Soluções de alto padrão e moldadas de acordo com <br className='hidden md:block' />
                    a sua necessidadae.
                </div>
            </div>
            <ServicesList
                data={
                    [
                        {
                            image: itConsultingImage,
                            code: "01",
                            title: "Consultoria em TI",
                            description: "Sua empresa tem dificuldade em  alinhar o negócio com as evoluções tecnológicas? Conheça nossas soluções de consultoria que vão te ajudar a direcioná-la para o futuro, com foco em novas tecnologias.",
                            link: "#"
                        },
                        {
                            image: uxuiImage,
                            code: "02",
                            title: "UX/UI Design",
                            description: "Um bom design é a melhor forma de superar as expectativas dos usuários.Construímos uma interface amigável, intuitiva e de fácil interação com maiores chances de engajar seus clientes.",
                            link: "#"
                        },
                        {
                            image: developmentImage,
                            code: "03",
                            title: "Desenvolvimento Web / Mobile",
                            description: "Podemos te ajudar a disponibilizar os seus serviços na nuvem, ou seja, em qualquer hora, com as informações em tempo real.",
                            link: "#"
                        },
                        {
                            image: iaImage,
                            code: "04",
                            title: "Inteligência artificial",
                            description: "Sua empresa tem dificuldade em  alinhar o negócio com as evoluções tecnológicas? Conheça nossas soluções de consultoria que vão te ajudar a direcioná-la para o futuro, com foco em novas tecnologias.",
                            link: "#"
                        },
                    ]
                }
            />
        </section>
    )
}