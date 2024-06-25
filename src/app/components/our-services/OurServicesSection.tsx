import rectangleImage from '@/../public/rectangle.svg'
import Image from 'next/image'
import { ServicesList } from './ServicesList'
import itConsultingImage from '@/assets/images/services/ti-consulting.png'
import uxuiImage from '@/assets/images/services/uxui-design.png'
import developmentImage from '@/assets/images/services/development.png'
import iaImage from '@/assets/images/services/ia.png'

export function OurServicesSection() {
    return (
        <section className='w-full bg-[#0A0A0B] p-24'>
            <div className='flex uppercase mb-11 text-base font-semibold gap-5'>
                <Image
                    src={rectangleImage}
                    alt='#'
                />
                Nossos Serviços
            </div>
            <div className='flex justify-between items-center mb-24'>
                <div className='text-[2.5rem] font-semibold leading-[60px]'>
                    Serviços projetados para <br />
                    acelerar sua produção.
                </div>
                <div className='text-base font-normal text-right text-[#7B7B7B]'>
                    Soluções de alto padrão e moldadas de acordo com <br />
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