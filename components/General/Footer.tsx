import Image from 'next/image';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineYoutube
} from "react-icons/ai";
import { useAppSelector } from "@/hooks/redux";
import { selectParams } from "@/lib/redux";
import { ApolloError, useMutation } from '@apollo/client';
import { createContactMutation } from "../../utils/mutations";
import { useState } from 'react';
import { toast } from 'react-toastify';

export const Footer = () => {
    const [updateSusbriber] = useMutation(createContactMutation);
    const [newContact, setNewContact] = useState("")
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewContact(event.target.value);
    }
    const saveNewContact = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (newContact !== '' && emailRegex.test(newContact)) {
            try {
                const { data, errors } = await updateSusbriber({
                    variables: {
                        createContactInput2: {
                            email: newContact
                        }
                    }
                });
                if (data.createContact.id) {
                    console.log('contact created');
                    setNewContact('');
                    toast.success('gracias por suscribirte', {
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }

                if (errors) {
                    console.log('error creating contact');
                }
            } catch (error) {
                const e = error as ApolloError;
                console.log(e.message);
                toast.info('ya estás suscrito con ese email, gracias!', {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            }
        } else {
            console.log('invalid email');
            toast.error('ingrese un email valido', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
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
                        <input type="text" placeholder='Email' value={newContact} onChange={handleInputChange} />
                        <button onClick={saveNewContact} >Subscribete</button>
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
