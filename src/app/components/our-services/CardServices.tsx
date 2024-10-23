import Image from "next/image";
import { LinkArrowIcon } from "../icons/LinkArrowIcon";
import Link from "next/link";
import { whatsAppLink } from "@/utils/whatsappLink";

export interface CardServicesProps {
    image: any
    code: string
    title: string
    description: string
    link: string
}

export function CardServices({ description, image, code, link, title }: CardServicesProps) {
    return (
        <div className="grid md:grid-cols-2 px-6 gap-8 md:gap-16">
            <div className="p-0 m-0 md:p-12 rounded-lg md:bg-[#232323]">
                <Image
                    src={image}
                    alt={`Imagem representando o serviço de ${title}`}
                />
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex font-semibold text-2xl gap-4">
                    <span className=" text-[#FF9700]">{code}.</span>
                    <div className="text-white">{title}</div>
                </div>
                <div className="text-sm font-normal text-[#909090]">
                    {description}
                </div>
                    <Link
                    href={whatsAppLink}
                    className="flex mr-auto items-center py-4 md:py-2- px-6 bg-yellowbutton text-base font-semibold text-[#1F1F1F] rounded-full gap-4"
                    >
                        Iniciar projeto <LinkArrowIcon />
                    </Link>
            </div>
        </div>
    )
}