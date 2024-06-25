import { CardServices, CardServicesProps } from "./CardServices";

interface Props {
    data: CardServicesProps[]
}

export function ServicesList({ data }: Props) {
    return (
        <ul className="flex flex-col gap-44">
            {
                data.map(item => (
                    <li key={item.code}>
                        <CardServices
                            {...item}
                        />
                    </li>
                ))
            }
        </ul>
    )
}