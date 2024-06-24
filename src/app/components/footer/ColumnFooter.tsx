import Link from "next/link"

interface Props {
    title: string
    linksArray: {
        label: string,
        link: string,
    }[]
}

export function ColumnFooter({ linksArray, title }: Props) {

    return (
        <div className="flex flex-col w-1/6">
            <div className="font-medium mb-2 text-white text-base">{title}</div>
            <ul className="flex flex-col gap-4">
                {
                    linksArray.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.link}
                            >
                                {link.label}
                            </Link>

                        </li>
                    ))
                }
            </ul>
        </div>
    )

}