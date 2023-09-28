"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { changeVisibilityMenu, selectCover } from "@/lib/redux";
import { selectParams } from "@/lib/redux";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube
} from "react-icons/ai";
const Cover = () => {
  const dispatch = useAppDispatch();
  const showCover = useAppSelector(selectCover);
  const { data: params } = useAppSelector(selectParams);
  const style = {
    backgroundImage: `url(${params?.getParams.backgroundCover || '/static/contact_cover.webp'})`,
  };
  return (
    <div style={style} className={`cover ${showCover ? 'visible' : ''}`}>
      <span
        className="cover__close-button"
        onClick={() => dispatch(changeVisibilityMenu())}
      >
        &times;
      </span>
      <div className="cover__nav">
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/" className="cover__nav-item">Home</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/menu" className="cover__nav-item">Menú</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/blog" className="cover__nav-item">Blog</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/about" className="cover__nav-item">Sobre nosotros</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/contact" className="cover__nav-item">Contacto</Link>
      </div>
      <div className="cover__contact">
        <h2>Contacto</h2>
        <hr />
        <div className="cover__contact-info">
          <span className="cover__contact-item">{params?.getParams.phone || '+ 01 123 456 789'}</span>
          <span className="cover__contact-item">{params?.getParams.email || 'jondoe@email.com'}</span>
          <span className="cover__contact-item">
            {params?.getParams.address || 'New York, NY 10012, US'}
          </span>
          <div className="cover__contact-icons">
            <a target="_blank" href={params?.getParams.instagram || ''}><AiOutlineInstagram /></a>
            <a target="_blank" href={params?.getParams.twitter || ''}><AiOutlineTwitter /></a>
            <a target="_blank" href={params?.getParams.facebook || ''}><AiOutlineFacebook /></a>
            <a target="_blank" href={params?.getParams.youtube || ''}><AiOutlineYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
