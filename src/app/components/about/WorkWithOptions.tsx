import { RocketIcon } from "../icons/RocketIcon";

interface Props {
    listItens: string[]
}
export function WorkWithOptions({ listItens }: Props) {
    return (
        <div className="flex flex-col gap-4">
            <div className="font-normal text-sm text-[#D3D3D3]">Trabalhamos com:</div>
            <ul className="flex gap-6">
                {
                    listItens.map((item, index) => (
                        <li className="flex items-center text-sm text-[#D3D3D3] gap-2" key={index}>
                            <RocketIcon />
                            <div>
                                {item}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}