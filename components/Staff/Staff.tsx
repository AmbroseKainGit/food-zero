import Image from "next/image"
import { StaffMember } from "@/typings"
interface props {
    data: StaffMember,
    loopIndex: number
}

export const Staff = ({ data, loopIndex }: props) => {

    const isEven = loopIndex % 2 === 0 || loopIndex === 0;
    const classEven = isEven ? 'staff__container__even' : 'staff__container__odd';
    return (
        <div className={`${classEven}`}>
            <div className="staff__container__data">
                <div className="staff__container__data__role">
                    {data.role}
                </div>
                <div className="staff__container__data__name">
                    {data.name}
                </div>
                <Image src={data.image} alt={data.name} width={726} height={861} />
            </div>
            <div className="staff__container__description">
                {data.description}
            </div>
        </div>
    )
}
