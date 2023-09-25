import Image from 'next/image'
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube
} from "react-icons/ai";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";

export const Footer = () => {
    const { data: params } = useAppSelector(selectParams);
    return (
        <footer className='footer'>
            <div className='footer__up'>
                <div className='footer__up__logo'>
                    <Image
                        src="/images/logo_footer.svg"
                        width={188}
                        height={168}
                        alt="Food zero logo"
                    />
                </div>
                <div className='footer__up__contact'>
                    <div className='footer__up__contact__title'>Contacto</div>
                    <div className='text footer__up__contact__phone'>{params?.getParams.phone || '+01 123 456 780'}</div>
                    <div className='text footer__up__contact__email'>{params?.getParams.email || 'jondoe@email.com'}</div>
                    <div className='text footer__up__contact__address1'>1{params?.getParams.address || 'New York, NY 10012, US'}</div>                    
                </div>
                <div className='footer__up__subscribe'>
                    <div className='footer__up__subscribe__title'>No te pierdas ninguna receta</div>
                    <div className='footer__up__subscribe__form'>
                        <input type="text" placeholder='Email' />
                        <button>Subscribete</button>
                    </div>
                    <div className='footer__up__subscribe__text'>¡Únete a nuestros suscriptores y recibe la mejor receta cada semana!</div>

                </div>
            </div>
            <div className='footer__down'>
                <div className='footer__down__left'>
                    © 2023 Zero Inc. All rights Reserved
                </div>
                <div className='footer__down__right'>
                    <a target="_blank" href={params?.getParams.instagram || ''}><AiOutlineInstagram /></a>
                    <a target="_blank" href={params?.getParams.twitter || ''}><AiOutlineTwitter /></a>
                    <a target="_blank" href={params?.getParams.facebook || ''}><AiOutlineFacebook /></a>
                    <a target="_blank" href={params?.getParams.youtube || ''}><AiOutlineYoutube /></a>          
                </div>
            </div>
        </footer>
    )
}
