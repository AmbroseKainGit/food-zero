import { OrangeSvg } from "../Svg/OrangeSvg";
import Image from "next/image";
interface props {
  email: string;
  phone: string;
  address: string;
  cover1: string;
  cover2: string;
}
export const Contact = ({ email, phone, address, cover1, cover2 }: props) => {
  return (
    <div className="contact__container">
      <div className="contact__container__svg">
        <OrangeSvg />
      </div>
      <div className="contact__container__up">
        <Image src={cover1} alt="contact" width={792} height={593} />
        <div className="contact__container__up__info">
          <span>nos pueden contactar en </span>
          <span>email <span className="contact-text">{email}</span></span>
          <span>o al telefono <span className="contact-text">{phone}</span></span>
        </div>
      </div>
      <div className="contact__container__down">
        <div className="contact__container__down__info">
          <span>Estamos localizados en <span>{address}</span></span>
          <a className="button-map" target="_blank" href={`https://www.google.com/maps?q=${address}`}>Ver el mapa</a>
        </div>
        <Image src={cover2}  alt="contact" width={792} height={990} />
      </div>
    </div>
  )
}
