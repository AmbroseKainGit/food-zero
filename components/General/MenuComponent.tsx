"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/redux";
import { changeVisibilityMenu } from "@/lib/redux";

export const MenuComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className="menu-header">
      <div className="menu-header__left">
        <div className="menu-header__left__logo">
          <Image
            src="/images/logo.svg"
            width={307}
            height={115}
            alt="Food zero logo"
          />
        </div>
        <div
          className="menu-header__left__button"
          onClick={() => dispatch(changeVisibilityMenu())}
        >
          <Image
            src="/images/hamburger.svg"
            width={94}
            height={71}
            alt="Menu button"
          />
        </div>
      </div>
      <div className="menu-header__right">
        <div className="menu-header__right__phone">+86 852 346 000</div>
        <div className="menu-header__right__button">
          <button>Reservations</button>
        </div>
      </div>
    </nav>
  );
};
