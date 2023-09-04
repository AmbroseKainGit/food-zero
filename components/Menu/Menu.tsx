import { MenuItem } from "@/typings"
import { url } from "inspector"
import Image from "next/image"
interface props {
    data: MenuItem
    loopIndex: number
}

export const Menu = ({ data, loopIndex }: props) => {
    const backgroundImg = {
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }

    const isEven = loopIndex % 2 === 0 || loopIndex === 0;
    const classEven = isEven ? '' : 'menu__container__odd';

    return (
        <div className='menu__container'>
            {/* {isEven && mostrar svg 
            } */}
            <div className="menu__container__top">
                <div className="menu__container__top__title">{data.name}</div>
                <div className="menu__container__top__description">{data.description} {loopIndex}</div>
            </div>
            <div className={`menu__container__bottom ${classEven}`}>
                <div className="menu__container__bottom__picture" style={backgroundImg}>
                </div>
                <div className="menu__container__bottom__items">
                    {data.products.map((product) => (
                        <div className="menu__container__bottom__items__item" key={product.id}>
                            <div className="menu__container__bottom__items__item__price">${product.price}</div>
                            <div className="menu__container__bottom__items__item__title">{product.name}</div>
                            <div className="menu__container__bottom__items__item__description">{product.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
