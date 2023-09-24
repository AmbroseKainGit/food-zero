"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { changeVisibilityMenu, selectCover } from "@/lib/redux";
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
  return (
    <div className={`cover ${showCover ? 'visible' : ''}`}>
      <span
        className="cover__close-button"
        onClick={() => dispatch(changeVisibilityMenu())}
      >
        &times;
      </span>
      <div className="cover__nav">
      <Link onClick={() => dispatch(changeVisibilityMenu())} href="/" className="cover__nav-item">Home</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/menu" className="cover__nav-item">Menu</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/blog" className="cover__nav-item">Blog</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/about" className="cover__nav-item">About</Link>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/contact" className="cover__nav-item">Contact</Link>
      </div>
      <div className="cover__contact">
        <h2>Contact</h2>
        <hr />
        <div className="cover__contact-info">
          <span className="cover__contact-item">+86 852 346 000</span>
          <span className="cover__contact-item">info@foodzero.com</span>
          <span className="cover__contact-item">
            1959 Sepulveda Blvd. Culver City, CA, 90230
          </span>
          <div className="cover__contact-icons">
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiOutlineFacebook />
            <AiOutlineYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
