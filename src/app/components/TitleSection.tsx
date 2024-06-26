import Image from "next/image";
import rectangleImage from '@/../public/rectangle.svg'
import rectangleMImage from '@/assets/images/rectangle-m.svg'

interface Props {
    title: string;
    titleColor?: string;
}

export function TitleSection({ title, titleColor = 'white' }: Props) {  
    return (
        <div className='flex uppercase mb-11 text-base font-WorkSans font-semibold gap-5'>
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
            <span style={{ color: titleColor }}>{title}</span>
        </div>
    )
}
