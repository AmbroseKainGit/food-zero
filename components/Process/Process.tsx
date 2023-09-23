import Image from "next/image"
import { MeatProcess } from "@/typings"
import { RosemarySvg } from "../Svg/RosemarySvg"
interface props {
    data: MeatProcess,
    processTitle: string,
    loopIndex: number
}

export const Process = ({ data, processTitle, loopIndex }: props) => {

    const isEven = loopIndex % 2 === 0 || loopIndex === 0;
    const classEven = isEven ? 'process__container__even' : 'process__container__odd';
    const classEvenSvg = isEven ? 'svg_container_even' : 'svg_container_odd';
    const formattedIndex = (data.order).toString().padStart(2, '0');
    return (
        <div className="meat_process_container">
            <div className={`${classEvenSvg}`}>
                <RosemarySvg />
            </div>
            {loopIndex === 0 && <div className="process__title">{processTitle}</div>}
            <div className={`${classEven}`}>
                <div className="process__container__data">
                    <Image src={data.image} alt={data.name} width={726} height={861} />
                </div>
                <div className="process__container__text">
                    <div className="process__container__text__name">
                        {formattedIndex}. {data.name}
                    </div>
                    <div className="process__container__text__description">
                        {data.description}
                    </div>
                </div>
            </div>       
        </div>
    )
}
