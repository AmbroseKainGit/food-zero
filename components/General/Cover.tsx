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
        <h1 className="cover__nav-item">Home</h1>
        <Link onClick={() => dispatch(changeVisibilityMenu())} href="/menu" className="cover__nav-item">Menu</Link>
        <h1 className="cover__nav-item">Blogs</h1>
        <h1 className="cover__nav-item">About</h1>
        <h1 className="cover__nav-item">Contact</h1>
      </div>
      <div className="cover__contact">
        <h1>Contact</h1>
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
