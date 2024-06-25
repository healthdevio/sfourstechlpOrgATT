import Image from "next/image";
import { CardAvatar, CardAvatarProps } from "./CardAvatar";

interface Props extends CardAvatarProps {
    deposition: string
}

export function CardDeposition(props: Props) {
    return (
        <div className="relative flex flex-col bg-[#121212] p-6 gap-8 rounded">
            <CardAvatar {...props} />
            <div className="text-xl text-[#B3B3B3] leading-8">
                {props.deposition}
            </div>
        </div>
    )
}