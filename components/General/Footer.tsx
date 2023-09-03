import Image from 'next/image'

export const Footer = () => {
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
                        <div className='footer__up__contact__title'>Contact</div>
                        <div className='text footer__up__contact__phone'>+1+86 852 346 000</div>
                        <div className='text footer__up__contact__email'>info@foodzero.com</div>
                        <div className='text footer__up__contact__address1'>1959 Sepulveda Blvd.</div>
                        <div className='text footer__up__contact__address2'>Culver City, CA, 90230</div>
                    </div>
                    <div className='footer__up__subscribe'>
                        <div className='footer__up__subscribe__title'>Never Miss a Recipe</div>
                        <div className='footer__up__subscribe__form'>
                            <input type="text" placeholder='Email Address' />
                            <button>Subscribe</button>
                        </div>
                        <div className='footer__up__subscribe__text'>Join our subscribers and get best recipe delivered each week!</div>

                    </div>
                </div>              
            <div className='footer__down'>
                    <div className='footer__down__left'>
                        © 2020 Zero Inc. All rights Reserved
                    </div>
                    <div className='footer__down__right'>
                        <Image
                            src="/images/instagram.svg"
                            width={28}
                            height={28}
                            alt="Instagram logo"
                        />
                        <Image
                            src="/images/twitter.svg"
                            width={28}
                            height={28}
                            alt="Twitter logo"
                        />
                        <Image
                            src="/images/facebook.svg"
                            width={28}
                            height={28}
                            alt="Facebook logo"
                        />
                        <Image
                            src="/images/youtube.svg"
                            width={28}
                            height={28}
                            alt="Youtube logo"
                        />
                    </div>
                </div>
        </footer>
    )
}