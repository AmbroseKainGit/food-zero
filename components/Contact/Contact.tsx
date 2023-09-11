import { OrangeSvg } from "../Svg/OrangeSvg";
import Image from "next/image";
interface props {
  email: string;
  phone: string;
  address: string;
}
export const Contact = ({ email, phone, address }: props) => {
  return (
    <div className="contact__container">
      <div className="contact__container__svg">
        <OrangeSvg />
      </div>
      <div className="contact__container__up">
        <Image src="/static/contact_1.webp" alt="contact" width={792} height={593} />
        <div className="contact__container__up__info">
          <span>We can ber contacted via </span>
          <span>email <span className="contact-text">{email}</span></span>
          <span>or telephone <span className="contact-text">{phone}</span></span>
        </div>
      </div>
      <div className="contact__container__down">
        <div className="contact__container__down__info">
          <span>We are located in <span>{address}</span></span>
          <a className="button-map" target="_blank" href={`https://www.google.com/maps?q=${address}`}>View in maps</a>
        </div>
        <Image src="/static/contact_2.webp" alt="contact" width={792} height={990} />
      </div>
    </div>
  )
}
