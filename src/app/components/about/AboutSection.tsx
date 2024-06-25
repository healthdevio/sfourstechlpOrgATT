import Image from "next/image"
import rectangleImage from '@/../public/rectangle.svg'
import { WorkWithOptions } from "./WorkWithOptions"
import exampleImageVideo from "@/assets/images/image-video-example.png"
import { PlayIcon } from "../icons/PlayIcon"
import Link from "next/link"

export function AboutSection() {
    return (
        <section className="relative grid grid-cols-12 w-full bg-[#111111] pl-24">
            <div className="relative col-span-7 py-24">
                <div className='flex uppercase mb-11 text-base font-semibold gap-5'>
                    <Image
                        src={rectangleImage}
                        alt='#'
                    />
                    Quem somos?
                </div>
                <div className="flex flex-col mb-24 gap-10">
                    <div className="font-semibold text-[2.5rem] leading-[60px] text-white">
                        Temos o compromisso de simplificar <br />
                        os desafios do mundo digital.
                    </div>
                    <div className="text-[#909090]">
                        Somos especialistas em impulsionar o valor dos negócios através de soluções sob medida, <br />
                        abrangendo desde Inteligência Artificial até aplicativos personalizados, <br />
                        APIs robustas, integrações complexas e desenvolvimento de software de ponta.
                    </div>
                </div>

                <WorkWithOptions
                    listItens={[
                        "Consultoria em TI",
                        "UX/UI Design",
                        "Desenvolvimento web",
                        "Desenvolvimento mobile",
                    ]}
                />

                <div className="absolute w-[1px] bg-[#222222] h-full top-0 bottom-0 right-0" />
            </div>

            <div className="flex flex-col col-span-5 px-16 pt-20">
                <Image
                    src={exampleImageVideo}
                    alt=""
                />

                <Link
                    className="flex items-center hover:bg-[#9090903a] ml-auto gap-5 mt-2 px-4 py-2 rounded-full transition-all duration-300"
                    href={'#'}
                >
                    <PlayIcon color="#FF9700"/>
                    <div>Video Institucional</div>
                </Link>
            </div>
        </section>
    )
}