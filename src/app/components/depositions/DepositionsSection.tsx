import rectangleImage from '@/../public/rectangle-1.svg'
import Image from 'next/image'
import { CardDeposition } from './CardDeposition'
import sarahmendesImage from '@/assets/images/deposition-cards/sarahmendes-sesa.jpeg'
import kleisomsabinoImage from '@/assets/images/deposition-cards/kleisomsabino-investplus.jpeg'
import raquelalmeidaImage from '@/assets/images/deposition-cards/raquelalmeida-livsaude.jpeg'
import firulaImage from '@/assets/firula-1.svg'
import arrowImage from '@/assets/arrow-1.svg'
import dollImage from '@/assets/doll.svg'

export function DepositionsSection() {
    return (
        <section className="grid grid-cols-2 bg-[#0A0A0B] p-24">
            <div>
                <div className='flex uppercase font-semibold mb-11 gap-5'>
                    <Image
                        src={rectangleImage}
                        alt='#'
                    />
                    Depoimentos
                </div>
                <div className='text-[2.5rem] text-white font-bold mb-24'>
                    Deixamos que nossos resultados <br />
                    falem por nós
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='grid gap-3'>
                        <CardDeposition
                            key={'saramendes'}
                            image={sarahmendesImage}
                            name="Sarah Mendes"
                            role="Secretária Executiva | SESA"
                            deposition='Esse time da s4S nos apoiou na Secretaria de Saúde do Estado do Ceará, no ápice da COVID-19. Foram os profissionais que entregaram os resultados e tecnologias que precisávamos para o momento, com muita agilidade, profissionalismo e tecnologia. Foi uma experiência maravilhosa trabalhar lado a lado com eles.'
                        />
                        <CardDeposition
                            key={'kleisomsabino'}
                            image={kleisomsabinoImage}
                            name="Kleisom Sabino"
                            role="CEO | Investplus"
                            deposition='Esses caras foram incríveis na hora de destravar alguns de nossos projetos. São muito acelerados e competentes.'
                        />
                    </div>
                    <div className='relative flex flex-col justify-center'>
                        <Image
                            className='absolute top-10 left-20'
                            src={firulaImage}
                            alt='image decorativa'
                        />
                        <CardDeposition
                            key={'raquelalmeida'}
                            image={raquelalmeidaImage}
                            name="Raquel Almeida"
                            role="Diretora de Recursos Próprios | LIV Saúde"
                            deposition='Precisávamos de um time ágil e com expertise do negócio no momento mais crítico de alta escalabilidade quando mais que triplicarmos de tamanho e o volume dos nossos processos. A s4S conseguiu nos entregar as soluções que precisávamos no tempo e com a qualidade exigida.'
                        />
                        <Image
                            className='absolute left-4 bottom-0'
                            src={arrowImage}
                            alt='imagem decorativa'
                        />
                    </div>
                </div>
            </div>

            <div className='flex relative items-end justify-end'>
                <Image
                    className='-mb-24 -mr-10'
                    src={dollImage}
                    alt='Imagem de uma boneca com megafone'
                />
            </div>
        </section>
    )
}