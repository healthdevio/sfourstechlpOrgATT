import Image from "next/image"
import aspasImage from "@/assets/aspas.svg";

export interface CardAvatarProps {
    image: any
    name: string
    role: string
}

export function CardAvatar({ image, name, role }: CardAvatarProps) {
    return (
        <div className="relative w-full flex gap-4">
            <div className="flex overflow-hidden rounded-full">
                <Image
                    width={56}
                    height={56}
                    src={image}
                    alt={`imagem da pessoa que fez o depoimento: ${name}`}
                />
            </div>
            <div className="flex flex-col font-medium">
                <div className="text-lg text-white mt-auto">{name}</div>
                <div className="text-[#F19C1C] mb-auto">{role}</div>
            </div>
            <Image
                className="absolute top-0 right-0"
                src={aspasImage}
                alt="image"
            />
        </div>
    )
}