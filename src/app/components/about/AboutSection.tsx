import Image from "next/image"
import { WorkWithOptions } from "./WorkWithOptions"
import exampleImageVideo from "@/assets/images/image-video-example.png"
import { PlayIcon } from "../icons/PlayIcon"
import Link from "next/link"
import rectangleImage from '@/../public/rectangle.svg'
import rectangleMImage from '@/assets/images/rectangle-m.svg'

export function AboutSection() {
    return (
        <section className="relative flex flex-col md:grid md:grid-cols-12 w-full bg-[#111111] md:pl-24 py-14 md:py-0 border-b border-b-[#232323]">
            <div className="relative col-span-7 py-24">
                <div className='flex uppercase mb-11 text-base font-semibold gap-5'>
                    <Image
                        className="hidden md:block"
                        src={rectangleImage}
                        alt='#'
                    />
                    <Image
                        className="md:hidden"
                        src={rectangleMImage}
                        alt='#'
                    />
                    Quem somos?
                </div>
                <div className="flex flex-col mb-24 px-6 md:px-0 gap-10">
                    <div className="font-semibold text-[2.5rem] leading-[33px] md:leading-[60px] text-white">
                        Temos o compromisso de simplificar <br className="hidden md:block" />
                        os desafios do mundo digital.
                    </div>
                    <div className="text-[#909090]">
                        Somos especialistas em impulsionar o valor dos negócios através de soluções sob medida, <br className="hidden md:block" />
                        abrangendo desde Inteligência Artificial até aplicativos personalizados, <br className="hidden md:block" />
                        APIs robustas, integrações complexas e desenvolvimento de software de ponta.
                    </div>
                </div>

                <WorkWithOptions
                    listItens={[
                        "Consultoria em TI",
                        "UX/UI Design",
                        "Desenvolvimento web / mobile",
                        "Inteligência artificial",
                    ]}
                />

                <div className="absolute w-[1px] bg-[#222222] h-full top-0 bottom-0 right-0" />
            </div>

            <div className="flex flex-col w-full md:col-span-5 px-6 md:px-16 md:pt-20">
                <Image
                    src={exampleImageVideo}
                    alt=""
                />

                <Link
                    className="flex items-center hover:bg-[#9090903a] ml-auto gap-5 mt-4 md:mt-2 px-4 py-2 rounded-full transition-all duration-300"
                    href={'#'}
                >
                    <PlayIcon color="#FF9700" />
                    <div>Video Institucional</div>
                </Link>
            </div>
        </section>
    )
}